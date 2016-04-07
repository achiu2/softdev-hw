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
def swap(l,a,b):
    c = l[a]
    l[a]=l[b]
    l[b]=cdef partition(l,start,end):
    pivot = l[start]
    s = start
    e = end

    while (s < e):
        while (l[s] < pivot):
            s+=1
        while (l[e] > pivot):
            e-=1
        if (s < e):
            swap(l,s,e)
            s+=1
            e-=1
    return e


def quicksort(l):
    if (len(l) == 1):
        return l
    else:
        split = partition(l,0,len(l)-1)
        rh = l[split+1]
        lh = l[len(l) - split - 1]

        f = 0
        for i in range(0,split+1):
            lh[f] = l[i]
            f+=1
        b = 0
        for i in range(split+1,len(l)):
            rh[b] = l[i]
            b+=1
        return quicksort(lh) + quicksort(rh)
l = populate()
print quicksort(l)
