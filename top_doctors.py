import pandas as pd
import matplotlib.pyplot as plt
import csv
# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.


def get_data(file):
    data = pd.read_csv(file)
    trx_1 = data["TRx_Month_1"]
    trx_2 = data["TRx_Month_2"]
    trx_3 = data["TRx_Month_3"]
    trx_4 = data["TRx_Month_4"]
    trx_5 = data["TRx_Month_5"]
    trx_6 = data["TRx_Month_6"]
    f_name = data["first_name"]
    l_name = data["last_name"]
    first_name = list(f_name)
    last_name = list(l_name)
    name = [0] * 1000
    for i in range(len(name)):
        name[i] = first_name[i] + " " + last_name[i]

    product_doctor = [0] * 1001
    itch_doctor = [0] * 1001
    zap_doctor = [0] * 1001
    nasal_doctor = [0] * 1001
    product = list(data["Product"])
    size = len(product)
    x = list(trx_1)
    y = list(trx_2)
    z = list(trx_3)
    a = list(trx_4)
    b = list(trx_5)
    c = list(trx_6)

    for i in range(size):
        if product[i] == "Cholecap":
            product_doctor[i] = product_doctor[i] + x[i] + y[i] + z[i] + a[i] + b[i] + c[i]
        if product[i] == "Zap-a-Pain":
            zap_doctor[i] = zap_doctor[i] + x[i] + y[i] + z[i] + a[i] + b[i] + c[i]
        if product[i] == "Nasalclear":
            nasal_doctor[i] = nasal_doctor[i] + x[i] + y[i] + z[i] + a[i] + b[i] + c[i]
        if product[i] == "Nova-itch":
            itch_doctor[i] = itch_doctor[i] + x[i] + y[i] + z[i] + a[i] + b[i] + c[i]
    d = dict(zip(product_doctor, name))
    e = dict(zip(zap_doctor, name))
    f = dict(zip(nasal_doctor, name))
    g = dict(zip(itch_doctor, name))
    sort_cholecap = ({k: v for k, v in sorted(d.items(), key = lambda item: item[0], reverse=True)})
    sort_zap = ({k: v for k, v in sorted(e.items(), key = lambda item: item[0], reverse=True)})
    sort_nasal = ({k: v for k, v in sorted(f.items(), key = lambda item: item[0], reverse=True)})
    sort_itch = ({k: v for k, v in sorted(g.items(), key = lambda item: item[0], reverse=True)})
    dict_items = sort_zap.items()
    d1 = list(dict_items)[:3]
    print(d1)
    fig = plt.figure(figsize=(30, 10))

    plt.bar(d1[0][1], d1[0][0], color='blue', width=0.4, label="Zap-a-Pain")
    plt.bar(d1[1][1], d1[1][0], color='blue', width=0.4)
    plt.bar(d1[2][1], d1[2][0], color='blue', width=0.4)

    dict_items = sort_cholecap.items()
    d1 = list(dict_items)[:3]
    print(d1)

    plt.bar(d1[0][1], d1[0][0], color='maroon', width=0.4, label="Cholecap")
    plt.bar(d1[1][1], d1[1][0], color='maroon', width=0.4)
    plt.bar(d1[2][1], d1[2][0], color='maroon', width=0.4)

    dict_items = sort_nasal.items()
    d1 = list(dict_items)[:3]
    print(d1)

    plt.bar(d1[0][1], d1[0][0], color='orange', width=0.4, label="Nasalclear")
    plt.bar(d1[1][1], d1[1][0], color='orange', width=0.4)
    plt.bar(d1[2][1], d1[2][0], color='orange', width=0.4)

    dict_items = sort_itch.items()
    d1 = list(dict_items)[:3]
    print(d1)

    plt.bar(d1[0][1], d1[0][0], color='pink', width=0.4, label="Nova-itch")
    plt.bar(d1[1][1], d1[1][0], color='pink', width=0.4)
    plt.bar(d1[2][1], d1[2][0], color='pink', width=0.4)

    plt.xlabel("Doctor Names")
    plt.xticks(fontsize=8)
    plt.ylabel("Total Prescriptions")
    plt.title("Veeva")
    plt.legend(loc="best")
    plt.show()

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    get_data('Veeva-Systems-Data.csv')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
