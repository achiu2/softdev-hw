"""def make_bold(fn):
    return lambda: "<b>"+fn()+"</b>"

def make_italic(fn):
    return lambda: "<i>"+fn()+"</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML
"""

import time
def timing(fn):
    def inner(*args):
        time1 = time.time()
        ret = fn(*args)
        time2 = time.time()
        print "...took "+str((time2-time1)*1000.0)+"s to run..."
        return ret
    return inner

def args(fn):
    def inner(*args):
        print(args)
        return fn(*args)
    return inner

def name(fn):
    def inner(*args):
        print(fn.func_name)
        return fn(*args)
    return inner

@name
@timing
@args
#random function
def union(l1,l2):
    return [x for x in l1 if x not in l2] + l2

randret = union([1,2,3],[2,3,4])

print randret
