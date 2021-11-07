from flask import Flask
import sqlite3
import json

app = Flask(__name__)
DATABASE = "../../database/mydb.db"


def get_db():
    db = getattr(Flask, "_database", None)
    if db is None:
        db = Flask._database = sqlite3.connect(DATABASE)
    return db


def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv


@app.route("/hello/", methods=["GET", "POST"])
def welcome():
    return "Hello World!"


@app.route("/profile/<int:id>", methods=["GET", "POST"])
def show_post(id):
    print("working")
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


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=105)
