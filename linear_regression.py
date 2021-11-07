import numpy as np
import matplotlib.pyplot as plt


def estimate_coef(x, y):
    # number of observations/points
    n = np.size(x)

    # mean of x and y vector
    m_x = np.mean(x)
    m_y = np.mean(y)

    # calculating cross-deviation and deviation about x
    SS_xy = np.sum(y * x) - n * m_y * m_x
    SS_xx = np.sum(x * x) - n * m_x * m_x

    # calculating regression coefficients
    b_1 = SS_xy / SS_xx
    b_0 = m_y - b_1 * m_x

    return (b_0, b_1)

def predict_values(b, CONST):
    result = 0
    result = b[0] + CONST * b[1]
    return result

def main():
    CONST = 9 # User inputs future month to predict
    x = np.array([1, 2, 3, 4, 5, 6]) # months
    y = np.array([11, 9, 9, 14, 16, 8]) # TRx or NRx depending on which set is imported

    # estimating coefficients
    b = estimate_coef(x, y)
    print("Estimated coefficients:\nb_0 = {}  \
          \nb_1 = {}".format(b[0], b[1]))
    y_pred = b[0] + b[1] * x
    prediction = predict_values(b, CONST)
    print(prediction) # final predicted prescribed drugs for the CONSTth month

if __name__ == "__main__":
    main()