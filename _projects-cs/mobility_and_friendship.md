---
title: "Does Mobility Make or Break Friendships?"
date: 2020-12-18T12:33:46+01:00
featured: true
weight: 1
layout: project
---

A study of the effect of **Mobility** on **Friendship** using a different models to predict how many friendships Foursquare users will make or break in a 22 month time period.

* <span style="color:#fdb73e">**Date:**</span> 18.12.2020
* <span style="color:#fdb73e">**Authors:**</span> Thomas Kimble, Shadi Naguib and Leo Alvarez
* <span style="color:#fdb73e">**Field of Study:**</span> Applied Data Analysis
* <span style="color:#fdb73e">**Context:**</span> EPFL Ma-3 Project


# Introduction

In 2020, zenith year for social media, the WorldWideWeb proliferates with celebrities and influencers, showing off their incredible life online and seeking for followers as much as forty-niners were looking for nuggets during the California Gold Rush. Many of the social media users have used an analytical app at least once to manage their virtual activity and visualise statistics about their posts and friends. One in particular can end friendships: indeed these apps can indicate which of your online friends has deleted you from their friend's list, or even unfollowed you. It is heartbreaking to discover that one of your close friends thought that you were not worth following anymore, and decided to cancel your virtual friendship.


It is almost impossible to precisely forecast the creation and deletion of particular social media friendships. Indeed it depends on too many real-life factors, including who you speak too, and who you meet, even randomly in a connection-free area. These factors making it difficult to use geo-localisation as friendship prediction tools. Nevertheless we believe that with the appropriate dataset, it must be possible to predict (or get close to) if a user will make or break friendships over a certain period.

Throughout this study, we used data from the social network *Foursquare* to build and train two different prediction models in order to determine whether friendships will be created or deleted a 22 month time period.


Foursquare is a location-based social network which database gathers 13+ billion check-ins, used by developers around the globe for localisation purposes. A **check-in** occurs when a user communicates their position, associated with a location category like a bakery, shops, boats, clubs, etc. We extracted a fraction of this database used in several papers exploring multiple aspects of friendship and mobility, and we will base our analysis on this dataset.


# Initial Analysis

First, let's talk about our data. As previously mentionned, we are using data from *Foursquare* which includes long-term global-scale check-in
data collected from Foursquare (about 22 months from April 2012 to January 2014), and also two snapshots of user
social networks before and after the check-in data collection period. After preprocessing, the check-in dataset contains
19,306,111 checkins by 71,188 users in 3,430,171 venues. The social network data contains 363,704 old and 607,333 new friendships.

Let's find out where all of these beautiful users live! We adopt the same method as proposed in *Friendship and Mobility: User Movement in
Location-Based Social Networks* by Jure Leskovec & al. [1]. We divide the world into 25km by 25km cells, we then determine the cell with the
most check-ins for each user.

The average location of check-ins within this cell is defined as a user's home. This method has proven to be 80% accurate in [1].

We can have a look at user home locations as well as check-in locations by country in the figure below.

{% include project_data/friendship/homes_and_checkins_plot.html %}

By selecting **Number of Homes** in the dropdown menu, we can see that the users living in the United States and in Brasil are the ones who use the Foursquare
application the most. In Europe, Asia, and Australia, there is also a large amount of users checking in on the application, whereas in Africa some countries don't have any user homes in at all. Selecting **Number of check-ins** shows us a similar trend, however more countries are filled out this time.

Let's dig a little deeper by looking at the 20 countries with the most users and figure out how the check-ins in these countries compare.

{% include project_data/friendship/top_20_plot.html %}

We observe a general correlation between the amount of homes per country and check-ins per country. The big exception here, that has a larger check-in number compared to other top countries as apposed to homes. Indeed japan is a very attractive country for tourists with over 30 million visitors a year, which would explain the large number of check-ins.

Foursquare defines a category hierarchy of multiple levels. Indeed each venue has a category, with perhaps a superior caterior, or even another
uperior category! We define 5 category levels (0 to 5) with 0 being the most general. Let us look at the distribution of check-ins within each of
the level 0 categories to get an idea on what our Foursquare users are up to.

{% include project_data/friendship/category_plot.html %}

Clearly the users love to eat!

# Scoring Users

To create our prediction model, we need to give each check-in a certain *Checkin Social Score*: we want to know how social a check-in is!
Indeed giving a social score to the 3,430,171 different venues is hard work. Giving a social score to the 506 unique proposed categories is slightly easier, but also
not the best idea. Remember the Foursquare hierarchy? We can use the level 1 category to group all checkins into one of 275 categories now.
Our social score is based on two main ideas, first of all that some places are less social than others, obviously a post office is less social than a nighclub. We
define a coefficient **C** for each level 0 category, reflecting how social this category is (in general).

|       Level 0 category      | Coefficient |
|:---------------------------:|:-----------:|
|        Nightlife Spot       |     1.5     |
| Proffesional & Other Places |     1.1     |
|     College & University    |     1.3     |
|             Food            |     1.3     |
|        Shop & Service       |     1.0     |
|      Travel & Transport     |     1.2     |
|          Residence          |     1.1     |
|    Outdoors & Recreation    |     1.4     |
|     Arts % Entertainment    |     1.3     |
|            Event            |     1.5     |
|            Other            |     1.0     |

Second of all, we want to know if a check-in was performed during the peak hours of the venue category. For this we use level 1 categories to be slightly more precise in our categorisation. If a check-in is within the venue's peak hours, we give it a score of **S_peak = 2**, if it is'nt we give it **S_peak = 1**. Each check-in can now get a social score by multiplying the coefficient with the peak hour score: **S = C*S_peak**.

Right, we have now given the check-ins social scores but not the users. We therefore give each user an individual social score that is equals to the mean value of **S** for each of their check-ins.

But we're not done here... We also give each user two travel scores! We want to see if mobility influences friendships, therefore we can't leave out travelling.
First we notice that our friends at Foursquare have given us a level 0 category named *Travel & Transport*, our first travel score **T_category** is defined as the fraction of check-ins within this category over the total number of check-ins. Our second travel score **T_distance** uses a more scientific approach. By looking at the distribution of check-in distances from home. We see that the distribution follows a power law with a dip between 70 and 200km from home. We therefore use the upper value of 200km to define whether a check-in should be considered a *Travel* or not. We define **T_distance** as the fraction of *Travel* check-ins (further than 200km from home) over the total numver of check-ins.

The figure below shows three user's with a high **T_distance** score in orange, and a low **T_distance** in purple. We can clearly see that our definition illustrates how far and how often a user with a high **T_distance** travels.

{% include project_data/friendship/travel_plot.html %}
