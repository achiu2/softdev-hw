#Union
def union(l1,l2):
    return [x for x in l1 if x not in l2] + l2
print union([1,2,3],[2,3,4])

#Intersection
def intersection(l1,l2):
    return [x for x in l1 if x in l2]
print intersection([1,2,3],[2,3,4])

#Set difference
def setdiff(l1,l2):
    return [x for x in l1 if x not in l2]
print setdiff([1,2,3],[2,3,4])
print setdiff([2,3,4],[1,2,3])    

#Symmetric difference
def symdiff(l1,l2):
    return [x for x in l1 if x not in l2] + [x for x in l2 if x not in l1]
print symdiff([1,2,3],[2,3,4])
    
#Cartesian Product
def cartesian(l1,l2):
    return [[x,y]
            for x in l1
            for y in l2]
print cartesian([1,2],['red','white']) 
