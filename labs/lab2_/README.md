# Lab 2
## Reflection Quesitons

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
No, we rather keep the states at a high level or centralized in order keep track of the view-model dependency.

MySaladSelect can be reused for other properties of the salad

## 4
Render function computes the React DOM tree based on props and states. Triggers on prop's and state's new values

## 5
Yes, in our code we have states for each part of the salad. This is meant to keep track of the properties of the soon to be submitted salad. 

## 6
What is the value of this in the event handling call-back functions?

'undefined' typeof='undefined'

functional components are functions not objects (?)
There's no need to use this in the event handlers since we pass an event as argument and can update states based on the events target.

## 7
When copying using ... spread syntax it will make a 'shallow' copy of the source. This includes all enuamrable properties but not the prototype chain itself. The prototype chain will not be affected.


# Lab 3
## Reflection questions

## 1
Change 
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
in index.html or just replace the favicon.ico file with another icon with the same filename.

## 2
NavLink is used for displaying css for an "active" Link especially for 'nav-tabs' (active tab).

'nav-pills' doesnt have an 'active' css condition meaning it doesnt have a styling when its active. This can be changed in the css by adding .nav-pills.active{css styles}

## 3
When clicking on a Link with '...url...' the url is appended on the current path. 

'/' is automaticlly added to the root path.