# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

n = 7
a = [[0] * n for i in range(n)]
for i in range(n):
    for j in range(n):
        if i < j:
            a[i][j] = 0
        elif i > j:
            a[i][j] = 0
        else:
            a[i][j] = 1
for row in a:
    print(' '.join([str(elem) for elem in row]))


matrix = [0, 0, 0, 0]
for x in range(0, 4):
    x = 0
    total = matrix*x
print(total)
