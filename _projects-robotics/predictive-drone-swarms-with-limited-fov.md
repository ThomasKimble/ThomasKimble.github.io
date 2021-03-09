---
title: "Predictive Drone Swarms with Limited Field of View"
date: 2018-11-18T12:33:46+10:00
featured: true
weight: 1
layout: project
---

A study of the effect of **limited field of view** on drone swarms using a state of the art **predictive** trajectory generation and collision avoidance algorithm.

* **Date:** 15.01.2021
* **Author:** Thomas Kimble
* **Field of Study:** Aerial Robotics
* **Context:** EPFL Ma-3 Semester Project


![Swarm](/images/project-images/swarm/swarm_intro.png)

# Introduction

Some robotics tasks such as manufacturing, surveillance, or search and rescue require the use of multiple agents to be accomplished. Indeed some objectives would be too time consuming or even impossible to complete if left to a single robot. Cooperation is key in the success of multi-agent tasks.

Coordination and cooperation are facilitated with a centralised approach with all agents sharing common information, but real life circumstances do not always allow for this. Therefore another way to approach the problem is by using distributed systems, where each agent is self-contained in its decision making as well as its sensing.

One standing issue with multi-agent robotics task is how to safely navigate an environment. Many algorithms mitigate certain real world constraints, and assume that each agent is able to sense every other neighbouring agent. Indeed most sensors are limited, thus adding concept of a limited field of view.

This was a semester project that I did during the final semester of my Master's degree at the Laboratory of Intelligent Systems at EPFL, Lausanne. I studied the effect of a limited field of view as it was introduced to a predictive model, combining state of the art collision avoidance algorithms with real world constraints such as the limited field of view found in off the shelf sensors.

# Method



# Experiment

The aim of the following set of experiments is to evaluate the performance of the model
using different FOV height and width angles α and β, as well as to monitor how  the heading
initialisation impacts performance.

For each initialisation mode, we run simulations with N = 3, 6 and 9 agents. We
vary the FOV angles from 15° to 180° with 15° increments and count the average number of collisions
over 5 simulations with each set of parameters.

For each agent *i*, *i = 1, 2, ..., N*, if *i* is an odd number than it is placed on the
*x = 2.5m* axis, if *i* is an even number than it is placed on the *x = −2.5m* axis. Agents
are spread randomly along the y-axis within *y = [−3m 3m]*, and randomly along the
z-axis within *z = [0.8m 1.2m]* therefore giving us *p<sub>start,i</sub>*. End positions are determined
the same way within the same boundaries for *y* and *z* except *x* values have their signs
switched. This means that if an agent starts on the *x = 2.5m* axis, it will finish on
the *x = −2.5m* axis, giving us all of the end positions *p<sub>end,i</sub>*. All agents are initialised at l
east *d = 0.3m* apart thus avoiding collisions at initialisation..

# Results

Here we can see three examples with N=3, 6 and 9 agents, with the following parameters:

* **Initialisation method**: most
* **FOV width angle**: α=60°
* **FOV height angle**: β=45°

Collision free trajectories were generated in each of the three examples,

<div class="container">
  <div class="column justify-content-start">
    <div class="col-12 order-1">
      {% include project_data/swarm/traj3.html %}
    </div>
    <div class="col-12 order-2">
      {% include project_data/swarm/traj6.html %}
    </div>
    <div class="col-12 order-3">
      {% include project_data/swarm/traj9.html %}
    </div>
  </div>
</div>

{% include project_data/swarm/results.html %}

# Conclusion

In conclusion, we introduced the effect of a limited field of view to a previously functional predictive model, combining a state of the art collision avoidance algorithm
with real world constraints such as the limited field of view found in off the shelf sensors.

After comparing multiple collision avoidance algorithms, on-demand collision avoidance was selected as it showed the best performances for the model. An to add heading
and heading velocity to the agents states to solve the existing quadratic programming
problem was made unsuccessfully, but to correct this issue the model was divided into
two problems. An optimisation problem for the trajectory generation and obstacle
avoidance, with a separate controller for the heading of the agents. After position and
heading initialisation, we used a proportional controller to ensure that each agent was
tracking other agents within their FOV to avoid collisions.

Field of view parameters such as width and height angles were compared with different initialisation methods to show that best performances occurred with FOV width
angles above 60° and height angles above 90°
, when agents were initialised with the
highest number of other agents possible with their FOV. We see trajectory generation
and point-to-point navigation with up to 9 agents with on average less than a single
collision with these parameters.

We notice that initialisation plays an important role in our model, and that it would
be interesting to implement vertical heading control to lower the possible width angle
lower than the reported 90° value for limited FOV.

Future work would include adding different FOV parameters such as an azimuth
dividing the FOV into to separate regions. Trajectory completion speed would also
have to be evaluated according to certain metrics to be defined. It would finally be
interesting will to update the predictive model with the heading angle in the state
space, and updating the quadratic cost function with limited field of view sensing
rather than solving two separate problems.

# Additional Material

For more details, please find my written report <a href="/images/project-images/swarm/swarm_report.pdf" target="_blank">here</a>. Unfortunately I can not share the code for this project due a confidentiality and non-use agreement.
