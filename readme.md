# Yahtzee Probability

I got curious about the probability of rolling a Yahtzee....According to https://www.thoughtco.com/probability-of-rolling-a-yahtzee-3126593, is about 4.74%.  I want to see if I can get in that ballpark with a model.  Also - I haven't written code in a while, so this'll be good practice.

11/24/20 - The simulation of Yahtzee is working, and after running it 1 billion times, a Yatzee was rolled 4.6021078% of the time.  I'm not sure why that's off from the target probability of 4.74%.  Maybe the target is incorrect...Maybe random number generation in JS is a bit off...Maybe the simulation is missing a small detail....