import numpy
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn.linear_model import LinearRegression
import csv
# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

def Average(key):
    return sum(key) / len(key)

def get_data(file):
    data = pd.read_csv(file)
    nrx_1 = data["NRx_Month_1"]
    nrx_2 = data["NRx_Month_2"]
    nrx_3 = data["NRx_Month_3"]
    nrx_4 = data["NRx_Month_4"]
    nrx_5 = data["NRx_Month_5"]
    nrx_6 = data["NRx_Month_6"]
    f_name = data["first_name"]
    l_name = data["last_name"]
    first_name = list(f_name)
    last_name = list(l_name)
    name = [0] * 1000
    for i in range(len(name)):
        name[i] = first_name[i] + " " + last_name[i]

    doctor = [0] * 1001
    product = list(data["Product"])
    size = len(product)
    x = list(nrx_1)
    y = list(nrx_2)
    z = list(nrx_3)
    a = list(nrx_4)
    b = list(nrx_5)
    c = list(nrx_6)
    q = 1000
    ggg = 0
    trends = [[] for h in range(q)]
    end_names = [None]*1001
    for i in range(size):
        doctor[i] = doctor[i] + x[i] + y[i] + z[i] + a[i] + b[i] + c[i]
        if (doctor[i] > 61):
            aa = x[i]
            bb = y[i]
            cc = z[i]
            dd = a[i]
            ee = b[i]
            ff = c[i]
            trends[ggg] = [aa, bb,cc,dd,ee,ff]
            end_names[ggg] = name[i]
            ggg = ggg+1

    months = [1,2,3,4,5,6]


    #sort_doctor = ({k: v for k, v in sorted(d.items(), key = lambda item: item[0], reverse=True)})
    #keys = list(sort_doctor.keys())
    #values = list(sort_doctor.values())
    #average = Average(keys)
    #maximum = max(keys)
    #minimum = min(keys)
    #print("The max is: " + str(maximum))
    #print("The min is: " + str(minimum))
    #print("The average is: " + str(average))
    short_trends = [x for x in trends if x != []]
    res = []
    for val in end_names:
        if val != None:
            res.append(val)

    nn = []
    top_names = []
    for jj in range(len(short_trends)):
        lst = short_trends[jj]
        if (lst[0] < lst[5]):
            nn.append(lst)
            top_names.append(res[jj])

    delta = 0
    delta_change = []
    for tt in range(len(nn)):
        xx = nn[tt]
        for cc in range(len(xx)-1):
            delta = delta + (xx[cc+1] - xx[cc])
        delta_change.append(delta)
        delta = 0
    print(nn)
    g = dict(zip(delta_change, top_names))
    sort = ({k: v for k, v in sorted(g.items(), key=lambda item: item[0], reverse=True)})

    print(sort)




# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    get_data('Veeva-Systems-Data.csv')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
