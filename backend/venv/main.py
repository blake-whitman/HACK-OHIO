from flask import Flask, request
import sqlite3
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
DATABASE = "../../database/mydb.db"


def get_db():
    db = getattr(Flask, "_database", None)
    if db is None:
        db = Flask._database = sqlite3.connect(DATABASE, check_same_thread=False)
    return db


def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv


@app.route("/hello/", methods=["GET"])
def welcome():
    return "Hello World!"


@app.route("/data/trx", methods=["GET"])
def data_trx():
    for data in query_db(
        "select sum(TRx_Month_1),  sum(TRx_Month_2), sum(TRx_Month_3), sum(TRx_Month_4), sum(TRx_Month_5), sum(TRx_Month_6) from mydb where Product='Cholecap';"
    ):
        cholecap = data
    for data in query_db(
        "select sum(TRx_Month_1),  sum(TRx_Month_2), sum(TRx_Month_3), sum(TRx_Month_4), sum(TRx_Month_5), sum(TRx_Month_6) from mydb where Product='Zap-a-Pain';"
    ):
        zap = data
    for data in query_db(
        "select sum(TRx_Month_1),  sum(TRx_Month_2), sum(TRx_Month_3), sum(TRx_Month_4), sum(TRx_Month_5), sum(TRx_Month_6) from mydb where Product='Nasalclear';"
    ):
        nasalclear = data
    for data in query_db(
        "select sum(TRx_Month_1),  sum(TRx_Month_2), sum(TRx_Month_3), sum(TRx_Month_4), sum(TRx_Month_5), sum(TRx_Month_6) from mydb where Product='Nova-itch';"
    ):
        nova = data

    result = {
        "Cholecap": cholecap,
        "Zap-a-Pain": zap,
        "Nasalclear": nasalclear,
        "Nova-itch": nova,
    }

    return json.dumps(result)


@app.route("/data/nrx", methods=["GET"])
def data_nrx():
    for data in query_db(
        "select sum(NRx_Month_1),  sum(NRx_Month_2), sum(NRx_Month_3), sum(NRx_Month_4), sum(NRx_Month_5), sum(NRx_Month_6) from mydb where Product='Cholecap';"
    ):
        cholecap = data
    for data in query_db(
        "select sum(NRx_Month_1),  sum(NRx_Month_2), sum(NRx_Month_3), sum(NRx_Month_4), sum(NRx_Month_5), sum(NRx_Month_6) from mydb where Product='Zap-a-Pain';"
    ):
        zap = data
    for data in query_db(
        "select sum(NRx_Month_1),  sum(NRx_Month_2), sum(NRx_Month_3), sum(NRx_Month_4), sum(NRx_Month_5), sum(NRx_Month_6) from mydb where Product='Nasalclear';"
    ):
        nasalclear = data
    for data in query_db(
        "select sum(NRx_Month_1),  sum(NRx_Month_2), sum(NRx_Month_3), sum(NRx_Month_4), sum(NRx_Month_5), sum(NRx_Month_6) from mydb where Product='Nova-itch';"
    ):
        nova = data

    result = {
        "Cholecap": cholecap,
        "Zap-a-Pain": zap,
        "Nasalclear": nasalclear,
        "Nova-itch": nova,
    }

    return json.dumps(result)


@app.route("/profile/<int:id>", methods=["GET"])
def show_post(id):
    # show the post with the given id, the id is an integer
    for user in query_db("select * from mydb where id=" + str(id) + ";"):
        x = {
            "id": user[0],
            "first_name": user[1],
            "last_name": user[2],
            "State": user[3],
            "Product": user[4],
            "NRx_Month_1": user[5],
            "NRx_Month_2": user[6],
            "NRx_Month_3": user[7],
            "NRx_Month_4": user[8],
            "NRx_Month_5": user[9],
            "NRx_Month_6": user[10],
            "TRx_Month_1": user[11],
            "TRx_Month_2": user[12],
            "TRx_Month_3": user[13],
            "TRx_Month_4": user[14],
            "TRx_Month_5": user[15],
            "TRx_Month_6": user[16],
        }
        y = json.dumps(x)

    return y


@app.route("/topnew/<string:product>", methods=["GET"])
def topnew(product):
    # show the post with the given id, the id is an integer
    topByMonth = {}
    for i in range(1, 7):
        top = []
        for user in query_db(
            "select * from mydb where Product='{}' ORDER BY cast(NRx_Month_{} as int) DESC LIMIT 5;".format(
                product, i
            )
        ):
            x = {
                "id": user[0],
                "first_name": user[1],
                "last_name": user[2],
                "NRx_Month_{}".format(i): user[4 + i],
            }
            top.append(x)
        topByMonth[i] = top

    return json.dumps(topByMonth)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=105)
