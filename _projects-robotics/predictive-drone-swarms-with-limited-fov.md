---
title: "Predictive Drone Swarms with Limited FOV"
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

Here we can see three examples if collision free trajectories with N=3, 6 and 9 agents, with the following parameters:

* **Initialisation method**: most
* **FOV width angle**: α=60°
* **FOV height angle**: β=45°

<div class="container">
  <div class="column justify-content-start">
    <div class="col-12 order-1">
      {% include project_data/swarm/traj9.html %}
    </div>
  </div>
</div>


# Results

The figure below shows the average number of collisions using different FOV width and height
angles α and β over 5 experiments for each parameter combination.

By comparing rows we can clearly see that the models performance is the poorest with the *Goal* initialisation method, followed by *Closest*, and the best performing is
*Most*.

{% include project_data/swarm/results.html %}

**Goal:**

For each number of agents, we can see a trend where higher FOV angles induce fewer collisions. We specifically notice that the height angle β has more effect on the number of collisions compared to the width angle α.

With N = 3 we can see that the maximal average amount of collisions reported is 1 with the lowest width and height angles both at 15°. The best performance for three agents is with β ≥ 60° and α ≥ 105°.

With N = 6 the results shows the same trends but with performance with width angles lower than β = 105° being very low, showing more collisions. The highest
number of collisions happens with β ≤ 45° where the number reaches an average of 3.4 collisions.

We see very poor performances for N = 9 agents, with the same trends in angles as previously, but this time reaching up to an average of 8.6 collisions.


**Closest:**

We see a similar trend as with the Goal heading initialisation method, however with more variability in the number of collisions with different angles. Lower angles in both width and height lead to more collisions, however here we see that in general lower width angles α lead to more collisions than lower height angles β.

For N = 3 agents, the results show good performances for angles higher than 15°, with a maximum average of 0.2 collisions for all angles above this value.

We can see that the highest number of collisions occurs with α = β = 15° with on average 2 collisions for N = 6 agents. Best performances here are for high
angles above 120° in both width and height.

For N = 9 agents collisions have an average above 0.4 collisions across all angles. The maximal values are for α = 15° with up to 3.8 average collisions.

**Most:**

This heading initialisation method shows to be the most promising with slightly more collisions on average at lower width and height angles, but with a general better performance than the other methods.

We can see with N = 3 agents that the model performs well overall, with slightly more collisions with α = 15° and β ≤ 30°. However the maximal average collision is 0.4 which is lower than the other two methods for N = 3.

For N = 6, results show that medium to width angles α ≥ 45° and height angles β > 75° show very good results with a maximal average of 0.4 collisions only in two cases. For other angles, we can see that lower height angles β seem to lead to a higher number of collisions with a value of up to 2.4 average.

Finally for N = 9 agents good performances are seen for α ≥ 60° and β ≥ 90°. Below these angles we can get up to an average of 3.8 collisions for α = β = 45° for example.

# Discussion

Surprisingly, the different initialisation methods had a larger impact on the number of collisions than expected. With N = 9 agents, maximal average collisions varied from
3.4 to 8.6 when using different methods. The *Closest* method outperformed the other two methods in maximal average number of collisions, and by minimal FOV angle values with less than 1 collision on average. We find good performance with this method and FOV angles α ≥ 60° and β ≥ 90°.

When using the *Goal* method, agents generally start off the simulation with no others in their FOV, therefore leading to minimal heading corrections and imminent
collisions that are only seen a moment before impact, and can not be avoided.

When using the *Closest* method, agents usually keep one other agent in their FOV, and as the closest agent is generally travelling in the same direction as itself, there is a low chance of trajectories coinciding and collisions happen with agents coming from further away. This method would perhaps work better if all agents within the swarm were heading in the same direction, but this hypothesis would need to be put to the test.

When using the *Most* method, by definition the agents were headed towards the maximal amount of others possible, therefore have more opportunities to correct their trajectory leading to less collisions. Indeed it is intuitive that an agent that can see more, can react accordingly.

If we focus more on the FOV results, independent of the initialisation mode we can see that in general a higher height angle β is required for fewer collisions when
compared to the width angle α. This is due to the fact that the implementation of our model corrects the heading around the z-axis (yaw) and does not allow the heading
and FOV to rotate up and down (pitch and roll). This leads to lower width angles α performing better than lower height angles β. Indeed in many cases, agents would avoid others trajectories by flying under or over, therefore not seeing other agents from beneath or from above, leading to collisions

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
