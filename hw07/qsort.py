"""
**********************
HOMEWORK: 4/6/16
==============
Quicksort
==============

1. Pick a pivot
2. Partition into 2 lists
*all values < p are LH
*all values > p are RH
*pivot in correct position

3. qsort(LH)+p+qsort(RH)

"""

import random

def populate():
    return [random.randint(0,50) for x in range(10)]

def quicksort(l):
    if len(l) == 0:
        return []

    pivot = l[0]
    lh = [x for x in l if x < pivot]
    rh = [x for x in l if x > pivot]
    
    return quicksort(lh) + [pivot] + quicksort(rh)

test = populate()
print test
print quicksort(test)
