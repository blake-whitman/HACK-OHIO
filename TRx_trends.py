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
    p = data["Product"]
    product = list(p)
    size = len(product)
    x = []
    y = []
    x = list(trx_1)
    y = list(trx_2)
    z = list(trx_3)
    a = list(trx_4)
    b = list(trx_5)
    c = list(trx_6)
    cholecap_1 = 0
    cholecap_2 = 0
    cholecap_3 = 0
    cholecap_4 = 0
    cholecap_5 = 0
    cholecap_6 = 0
    zapapain_1 = 0
    zapapain_2 = 0
    zapapain_3 = 0
    zapapain_4 = 0
    zapapain_5 = 0
    zapapain_6 = 0
    nasalclear_1 = 0
    nasalclear_2 = 0
    nasalclear_3 = 0
    nasalclear_4 = 0
    nasalclear_5 = 0
    nasalclear_6 = 0
    novaitch_1 = 0
    novaitch_2 = 0
    novaitch_3 = 0
    novaitch_4 = 0
    novaitch_5 = 0
    novaitch_6 = 0

    for i in range(size):
        if product[i] == "Cholecap":
            cholecap_1 = cholecap_1 + x[i]
            cholecap_2 = cholecap_2 + y[i]
            cholecap_3 = cholecap_3 + z[i]
            cholecap_4 = cholecap_4 + a[i]
            cholecap_5 = cholecap_5 + b[i]
            cholecap_6 = cholecap_6 + c[i]
        if product[i] == "Zap-a-Pain":
            zapapain_1 = zapapain_1 + x[i]
            zapapain_2 = zapapain_2 + y[i]
            zapapain_3 = zapapain_3 + z[i]
            zapapain_4 = zapapain_4 + a[i]
            zapapain_5 = zapapain_5 + b[i]
            zapapain_6 = zapapain_6 + c[i]
        if product[i] == "Nasalclear":
            nasalclear_1 = nasalclear_1 + x[i]
            nasalclear_2 = nasalclear_2 + y[i]
            nasalclear_3 = nasalclear_3 + z[i]
            nasalclear_4 = nasalclear_4 + a[i]
            nasalclear_5 = nasalclear_5 + b[i]
            nasalclear_6 = nasalclear_6 + c[i]
        if product[i] == "Nova-itch":
            novaitch_1 = novaitch_1 + x[i]
            novaitch_2 = novaitch_2 + y[i]
            novaitch_3 = novaitch_3 + z[i]
            novaitch_4 = novaitch_4 + a[i]
            novaitch_5 = novaitch_5 + b[i]
            novaitch_6 = novaitch_6 + c[i]
    cholecap_total = [cholecap_1, cholecap_2, cholecap_3, cholecap_4, cholecap_5, cholecap_6]
    months = ["1","2","3","4","5","6"]
    plt.plot(months,cholecap_total, color='red',marker='o', label="Cholecap")
    zapapain_total = [zapapain_1, zapapain_2, zapapain_3, zapapain_4, zapapain_5, zapapain_6]
    plt.plot(months, zapapain_total, color='blue', marker='o', label="Zap-a-Pain")
    nasalclear_total = [nasalclear_1, nasalclear_2, nasalclear_3, nasalclear_4, nasalclear_5, nasalclear_6]
    plt.plot(months, nasalclear_total, color='green', marker='o', label="Nasalclear")
    novaitch_total = [novaitch_1, novaitch_2, novaitch_3, novaitch_4, novaitch_5, novaitch_6]
    plt.plot(months, novaitch_total, color='orange', marker='o', label="Nova-itch")
    plt.xlabel('TRx Months', fontsize=14)
    plt.ylabel('Total Prescriptions', fontsize=14)
    plt.legend(loc="best")
    plt.title('Veeva')
    plt.grid(True)
    plt.show()
# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    get_data('Veeva-Systems-Data.csv')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
