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


# CODE OF CONDUCT

- We are committed to providing a friendly, safe and welcoming environment for all, regardless of level of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, nationality, or other similar characteristic(s).

- Please avoid using overtly sexual aliases or other nicknames that might detract from a friendly, safe and welcoming environment for all. Please refrain from using nicknames that might be offensive.

- Please be kind and courteous. There’s no need to be mean or rude. All rude and mean comments will be dealt with seriously

- Respect that people have differences of opinion and that every design or implementation choice carries a trade-off and numerous costs. There is seldom a right answer. The difference of opinion will be resolved as the situation arises and we suggest this shouldn't be considered as personal biases.

- Please keep unstructured critique to a minimum. If you have solid ideas you want to experiment with, make a fork and see how it works.

- We will exclude you from interaction if you insult, demean or harass anyone. That is not welcome behavior. We interpret the term “harassment” as including the definition in the [Citizen Code of Conduct](https://github.com/stumpsyn/policies/blob/master/citizen_code_of_conduct.md); if you have any lack of clarity about what might be included in that concept, please read their definition. In particular, we don’t tolerate behavior that excludes people in socially marginalized groups.

- Private harassment is also unacceptable. No matter who you are, if you feel you have been or are being harassed or made uncomfortable by a community member, please contact one of the channel ops or any of the Rust moderation team immediately. Whether you’re a regular contributor or a newcomer, we care about making this community a safe place for you and we’ve got your back.

- Likewise any spamming, trolling, flaming, baiting or other attention-stealing behavior is not welcome. We donot condone any such practices that are not useful to the community and we suggest and welcome all contributors to stick to a professional behaviour.
