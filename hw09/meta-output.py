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
def quicksort(l):
    if len(l) == 0:
        return []

    pivot = l[0]
    lh = [x for x in l if x < pivot]
    rh = [x for x in l if x > pivot]

    return quicksort(lh) + [pivot] + quicksort(rh)

import random
#random function
def populate():
    return [random.randint(0,50) for x in range(10)]

test = populate()
print test
print quicksort(test)

print test
