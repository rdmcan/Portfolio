GIT REFERENCE

Creating a Git Repository: 
--------------------------
git init (only once)

Staging Area: 
-------------
The staging area acts as a buffer zone where you can select 
the specific changes you want to include in your next commit. 
git add <filename>
git add .  (stage all the changes in your working directory)

Committing: 
-----------
A commit represents a snapshot of your project at a specific point in time. 
git commit -m "Your commit message"  (-m means message)

*****************************************************************************************
Apply git add . and git commit -m after any update to your code
*****************************************************************************************

Creating a branch:
------------------
git branch <branch_name> (basic command)
git checkout -b <branch_name> (advance command)
The -b argument means that the new branch will be created and that you'll checkout that branch. 
Without the -b it will create the branch and you'll still be on the current.

Delete a branch:
----------------
git branch -d <branch_name> (local branch)
git push origin --delete <branch_name> (delete a remote branch)

Lists all the branches:
-----------------------
git branch --all (or -a)

Switching branches:
-------------------
git checkout <branch_name> (example: git checkout master)

Merging branches: 
-----------------
Once you've completed your work on a branch, you can merge it back into the main
branch (usually called master or main). 
First, switch to the main branch and then execute the following command:
git merge <branch_name>

*****************************************************************
Shift + zz to close to exit a git merge asking for commit message
*****************************************************************


Update branches with the local master:
-------------------------------------
go to your local branch
            git merge master


-------------------------------------
Publish your git repository to github:
--------------------------------------
1. Crete a github Repository:
Click in the new icon
Add repository name
Finally, Create repository

2. Connect the git repository to the new created github repository:
First, copy the github URL in my case: https://github.com/rdmcan/Portfolio
Now run, 
            git remote add origin https://github.com/rdmcan/Portfolio

3. Push your local commits incluiding your local branch:
            git push -u origin master
The -u option add an upstream (tracking) reference

After auhtenticate your github is ready.


Clone a repository from github to local machine:
------------------------------------------------
In guthub click in Code -> local 
Copy the HTTPS address
finally, execute
            git clone https://github.com/rdmcan/Portfolio.git


Push from local branch "master" up to remote branch "origin"
-----------------------------------------------------------
            git push origin master


If someone makes changes in the repository in guthub:
-----------------------------------------------------
Pull those changes to your local machine With
            git pull origin