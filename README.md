
# KanBan React Project  
---
Hi there :wave:. This is a web app i've built which is essentially a to-do list with a [Kanban](https://kanbanize.com/kanban-resources/getting-started/what-is-kanban) organization style twist. This is a project I started to teach myself react. It is a create-react-app built with Materialize Css which features Hooks, state, and the use of props.
<br><br>

> "Kanban is a workflow management method for defining, managing, and improving services that deliver knowledge work."     
## Things I've Learned 
---


This project was started to teach myself React. I used various resources to learn React basics while also referring to the React docs (Top shelf documentation :ok_hand:) and stack overflow for clarification when needed.

<br>
After working on this project, i've learned the basics such as creating dynamic and static custom components, passing props, styling components, managing state using React hooks and using methods in React to create and delete components. Please feel free to check out my code to see how I implemented what I learned. :innocent:  
<br><br>
Overall, im feeling really good about the experience and am really enjoying React. I was told that when I start learning React I will think its the best thing ever, and now I can see why. 

<br><br>
## Potential Future Features
---

* I would like to find a way to speed up the application, I am finding that the imgs take a little long to load.

* I attempted to implement a search bar in the project and the search did work using .filter(), however, I was running into the issue of the imgs re-rendering into a different img and if a task list had a card, it would re-render without any of its cards when the search field was cleared. 

* Potentially adding a backend such as firebase and adding in a login auth system.

* After learning more about React i've now realised things like Redux and styled components and Material UI exist so I would want to implement those or use them in future projects from the start. 
## How it works?
---
This project is based on a kanban template found on [Trello](https://trello.com/en). I figured that this would be a perfect implementation for using/learning React and later found out that Trello used React to develop their app as well. 

<img src="https://user-images.githubusercontent.com/53887678/128098843-51553bec-be76-4882-9760-b0aadf94746b.png" alt="Kanban organization list with some cards added to the lists, from Trello" width="250"/>

First add a list, which will represent a specific category of tasks. The input will accept any characters but will give an error if the field is left empty on submit.

<img src="https://user-images.githubusercontent.com/53887678/128109170-c79f602f-4dfe-42e3-9b51-eaa2c3a6801d.png" alt="Grey Add list button with app default background" width="200">

Once a list is created, you can add individual task "cards" that fall into that list category.

<img src="https://user-images.githubusercontent.com/53887678/128109261-b223f903-547f-4f4d-9728-52368d61a9fe.png" alt="List container titled homework with an add card button, same default app background." width="200">

once complete you can either mark complete or delete the task.

<img src="https://user-images.githubusercontent.com/53887678/128109306-69198a94-117c-4591-ba76-f4ae475c1ed7.png" alt="List container titled homework with two card tasks underneath, one titled Math homework marked complete and one titled English homework not marked complete" width="200">

## Deployment
---
Deployed with [Netlify](https://www.netlify.com/)
<br><br>

## Get Started
---

From your command line, first clone the repo.

```bash
# clone this repo
$git clone https://github.com/brandontor/KanbanReactProj.git

# Go into the repo
$ cd KanbanReactProj

# Remove current origin repository 
$ git remote remove origin 
```

Then you can installl the dependencies using NPM: 

Using NPM: 

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```

You should now have a development server running in your default browser.

See this section about [Deployment](https://create-react-app.dev/docs/deployment/) for more information.
