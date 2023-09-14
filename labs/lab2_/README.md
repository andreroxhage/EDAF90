# Reflection Quesitons

## 1 
The render code computes the React DOM tree based on props and state.

If this code have other dependencies then unexpected behaviours and bugs may appear.

The bugs might get complex and difficult to debug.

## 2
Computing the array each time can be a performance problem. Hence having a small inventory its not a huge concern. 

It's a good idea to use useEffect in order to cache the data from inventory. The array will then only be computed if props.inventory changes.
	
useEffect(() => {
    extras = Object.keys(props.inventory).filter(
        (name) => props.inventory[name].foundation
    );
    setFoundation(newFoundation);
}, [props.inventory]);


## 3
No, I rather keep the states at a high level or centralized in order keep track of the view-model dependency.

MySaladSelect can be reused for other properties of the salad

## 4
Render function computes the React DOM tree based on props and states. Triggers on prop's and state's new values

## 5
Yes, in my code I have states for each part of the salad. This is meant to keep track of the properties of the soon to be submitted salad. 

## 6
What is the value of this in the event handling call-back functions?

'undefined' typeof='undefined'

functional components are functions not objects (?)
There's no need to use this in the event handlers since we pass a event as argument and can update states based on the events target.
