# How to contribute ?

This document will help an open-source contributor understand how to submit a pull-request to the repository

## Forking the repository

To contribute to this project, you will have to fork the repository, you can fork it by clicking on the [fork](https://github.com/ComputerSocietyVITC/Annual-Yearbook/fork) button.

![Fork](https://user-images.githubusercontent.com/67182544/194706505-22fff483-2bbc-4ee8-a025-49af21bf2852.png)


This fork will be maintained in your account's repository. As you contribute, your changes will be recorded in your repository.

You can read more about forking here:

- [GitHub's Article on Forking](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [Wikipedia Article](<https://en.wikipedia.org/wiki/Fork_(software_development)>)
- [Why forking helps - An article from OpenSource org](https://opensource.com/article/19/1/forking-good)

## Submitting an Issue

If you're unable to see an [feature](https://github.com/ComputerSocietyVITC/Annual-Yearbook/issues) which you would like to see with the project, we welcome you to submit an issue to create one.

If there are bugs, documentation issues or suggestions, feel free to create a new _issue_ and submit it to us !

## Claiming an Issue

If you're looking to contribtue, we strongly suggest going through the [issues](https://github.com/ComputerSocietyVITC/Annual-Yearbook/issues) and claiming an issue, this will ensure that your work isn't done parallely completed by another
open source contributor

## Committing to your fork

Once, you've forked, you can clone the fork and add your commits in the following way,

`git clone https://github.com/<Your username>/Annual-Yearbook.git`

This will clone your repository directly!

### The following part is important, please stick to the following rules

- Never Commit to `master`, Always add your commits to a branch which is appropriately named
- Once committed to a branch, sign your commit using the following command (We reccomend adding your GPG keys but this isn't mandatory for all contributors)

```sh
git commit -s
```

- Push these changes and submit a pull request.

## Pull Requests

Once you have commited your changes, you need to sync it up with your repository, you need to run

![image](https://user-images.githubusercontent.com/67182544/194706535-160db31f-a572-418f-9347-1d22a40df04d.png)


```sh
git push -u origin <your-branch-name>
```

If you use a different name apart from `origin`, you need to change that as well. Once you have pushed it, you will see an image like this in this repository, You will have to click on that button and create a pull request to submit your request here! Once that is done, the PR will be reviewed by the community and we'll integrate once the due process is complete.
