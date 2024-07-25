# Section 19 - Setting Up Git and Deployment

**About:** In this section, let's actually deploy the Forkify projec to a live server, or as we can also say, we will host the application on the internet to share it with everyone. We will do deployment using an amazing and free service called Netlify. We will also learn the fundamentals of Git, which is a version control software and it is something that every professional developer uses. So, you will definitely need Git on your development job and so, it is a good idea to learn it.

## Table of Content

- [Section 19 - Setting Up Git and Deployment](#section-19---setting-up-git-and-deployment)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [Simple Deployment with Netlify](#simple-deployment-with-netlify)
    - [Setting Up Git and GitHub](#setting-up-git-and-github)
  - [Author](#author)

## Lessons Learned

### Simple Deployment with Netlify

- Before we can deploy our application to Netlify, we need to create the final bundle of our application by running the `build` command in the [package.json](../Section%2018/package.json) file.
- So, up until this point, we have always used the `start` command but, that only works for development because the final output will actually contain the development server; and also, the code is not being compressed and that code is not being eliminated while in development.
- Once you run the build command, the final code is compressed and ready to be shipped to deployment.
- Once that is done, we are ready to go Netlify and deploy this project.
- Netlify is a free service that lets us developers deploy static webpages or static web apps.
- With static, we mean that the application only contains HTML, CSS, and JS, and some images. But no database or server side code.
- Basically, Netlify only works for frontend applications like the one that we just built.
- So, netlify is really an amazing service. It is extremely easy to set up and to use. It has a very generous free plan and it contains a lot of great features that you can also use for free.
- One of these features is called continuous integration with git, which we will use a bit later in the section.
- Deploying the web app by uploading files on Netlify.

### Setting Up Git and GitHub

- [Git](https://git-scm.com/)
  - It is a version constrol system i.e. it is a software that runs on your computer and you can basically use Git to save snapshots of your code overtime.
  - Then if you need, you can go back to an older version of your code if you need to recover some mistake, for example.
  - This is really just a tip of the iceberg of everything that you can do with Git.
  - Downloading and Installing Git
- Repository (Repo)
- [GitHub](https://github.com/bhoamikhona)
  - Creating an account and setting it up
- Configuring Git and GitHub

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
