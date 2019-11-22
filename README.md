# CS-400


##Push to new branch from local repository: 

*__git clone__ from master: 

*copy local repo to master folder

*__git checkout -b__ newbranch

*__git add .__

*__git commit -m "~"__

*__git push origin__ newbranch


**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~**

**Clone all remote branches**
$ git clone git://example.com/myproject
$ cd myproject

**$ git branch -a**
* master
  remotes/origin/HEAD
  remotes/origin/master
  remotes/origin/v1.0-stable
  remotes/origin/experimental
  
  **Peek at an upstream branch**
  $ git checkout origin/experimental
  
  **work on that branch**
  
  $ git checkout experimental
