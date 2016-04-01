UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
NUMBERS="0123456789"
SPECIAL=".?!&#,;:-_*"

#Task 1
def validate(str):
    l = [1 if x in UC_LETTERS
         else 2 if x in LC_LETTERS
         else 3 if x in NUMBERS
         else 0
         for x in str]
    if (1 in l) and (2 in l) and (3 in l):
        return "Password valid."
    else:
        return "Password invalid."

print validate("hi")
print validate("Hi")
print validate("HI")
print validate("hI123")

#Task2
def strength(str):
    score = 0;
    l = [1 if x in UC_LETTERS
         else 2 if x in LC_LETTERS
         else 3 if x in NUMBERS
         else 4 if x in SPECIAL
         else 0
         for x in str]
    if len(str) > 8:
        for x in range(1,5):
            if (x in l):
                score+=1
    if score == 0:
        return "Invalid, pw must be more than 8 characters"
    elif score == 1:
        return "Weak"
    elif score == 2:
        return "Moderate"
    elif score == 3:
        return "Strong"
    elif score == 4:
        return "Very Strong"

print strength("Hi123")
print strength("HITHISISatest123")
print strength("Hithisisatest")
print strength("thisisatest")
print strength("123456789")
    
