---
sidebar_position: 1
---

# Create a GitBuilding Project

## Creating a project folder

Create a folder for your project. It’s recommended to create it in `C:\` or `D:\` You can do it using the Windows explorer or Window terminal `mkdir project_name`

![Desktop pic](/img/github_web_1.jpg)

## Creating a new documentation using GitBuilding

Then, go to your project folder and run `gitbuilding new`. Empty documentation files will be added to the directory.

![Desktop pic](/img/github_web_2.jpg)

## Previewing the website template

 GitBuilding has a built-in live editor. Open your terminal, navigate to the folder with your documentation, and run `gitbuilding serve`.  

![Desktop pic](/img/github_web_3.jpg)

You can now open a browser and navigate to `http://localhost:6178/`. This will show the documentation in a browsable form. 

![Desktop pic](/img/github_web_4.jpg)

You can also edit the documentation directly from your browser by selecting edit in the top-right corner:

![Desktop pic](/img/github_web_5.jpg)

 ## Continuous integration

 Once you have finished the first version of your documentation, it can be released on GitHub and keep working on it. To set up continuous integration run `gitbuilding generate ci` and follow the instructions to choose the hosting service you wish to use, in this case, GitHub. The current CI scripts assume that your documentation is in the root directory of your Git repository.

 ![Desktop pic](/img/github_web_6.jpg)