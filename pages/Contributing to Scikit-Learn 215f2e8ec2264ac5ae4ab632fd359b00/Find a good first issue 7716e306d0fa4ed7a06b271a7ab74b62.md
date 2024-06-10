# Find a good first issue

Now that you are all set, let’s find good first issues to start contributing!

## Find issues

### 1. Docstring numpydoc validation

[https://github.com/scikit-learn/scikit-learn/issues/21350](https://github.com/scikit-learn/scikit-learn/issues/21350)

This issue is one of the easiest to get started, because it doesn’t require you to deep dive in the code. You will fix docstrings that don’t comply with the numpydoc format.

Choose unformatted functions from the list (also double check comments on the conversation to make sure no-one is already tackling the function you have chosen) and comment on which one you have chosen.

### 2. Estimator _validate_params

[https://github.com/scikit-learn/scikit-learn/issues/23462](https://github.com/scikit-learn/scikit-learn/issues/23462)

I recommend it as a second issue, because it is a gentle start into coding. You will extend parameter validation for estimators.

### 3. Stalled pull request

[Pull requests · scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+label%3AStalled)

Once you have done some PR on the 2 issues above, you can try to tackle more involved pull request by looking for the “stalled” label on pull requests. It is basically PRs that require a bit more work to be merged, and often brings a lot of value.

Other labels that you want to check are:

- good first issue
- help wanted
- easy
- moderate

To continue a stalled issue, you need to:

- Check that it is still stalled:
[scikit-learn.org/stable/developers/contributing.html#stalled-pull-requests](https://scikit-learn.org/stable/developers/contributing.html#stalled-pull-requests)
    
    > *If a contributor comments on an issue to say they are working on it, a pull request is expected within 2 weeks (new contributor) or 4 weeks (contributor or core dev), unless an larger time frame is explicitly given. Beyond that time, another contributor can take the issue and make a pull request for it. We encourage contributors to comment directly on the stalled or unclaimed issue to let community members know that they will be working on it.*
    > 
- Continue from the contributor branch when possible
    
    ```bash
    git pull upstream pull/<PULL_REQUEST_NUMBER>/head:<BRANCH_NAME>
    git checkout <BRANCH_NAME>
    ```
    
- Resolve eventual conflicts with the main branch
    
    ```bash
    git fetch upstream
    git merge upstream/main
    ```
    
- Create a new PR indicating “follow-up” or “supersede” in the PR description. Also mention the original issue with `#<ISSUE_NUMBER>` in the description
- Add original author into the change log entry, if any

## Contribution checklist

When you have identify an issue to work on:

1. Pull the latest change from upstream
    
    ```bash
    git pull upstream main
    ```
    
2. Create a new branch
    
    ```bash
    git checkout -b your_branch
    ```
    
3. Code!
4. Commit if your tests are successful
    
    ```bash
    git add my_file
    git commit -m "my new commit"
    ```
    
    This will run pre-commit on flake8, black and mypy.
    
5. Push your new branch on your forked repo
    
    ```bash
    git push -u origin my_branch
    ```
    
6. Finally, create a pull request from your fork to the original repo
    
    Choose your branch and click on *Contribute*
    
    ![Screen Shot 2022-08-07 at 16.36.56.png](Find%20a%20good%20first%20issue%207716e306d0fa4ed7a06b271a7ab74b62/Screen_Shot_2022-08-07_at_16.36.56.png)
    
    This will prompt the following
    
    ![Screen Shot 2022-08-07 at 15.37.39.png](Find%20a%20good%20first%20issue%207716e306d0fa4ed7a06b271a7ab74b62/Screen_Shot_2022-08-07_at_15.37.39.png)
    
    Click on *Create Pull Request* and check the next tutorial!
    
    [Contrib cheatsheet](Contrib%20cheatsheet%204d1c34bd9f5946349fc8df3a17424236.md)