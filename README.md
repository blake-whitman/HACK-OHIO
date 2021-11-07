# Veeva Systems Data Visualization
• Develop web app to illustrate data trends and information
• It graphically displays pharmaceutical prescriber data using JavaScript libraries and the React framework

See below for more information regarding JavaScript libraries considered for this project:
  [https://d3js.org]
  [https://www.chartjs.org]

• Added the ability to report the top doctors based on total prescriptions (TRx) by
product
    - We determined that more prescriptions equates to a more successful doctor and filtered through the data accordingly. The final result was the sorting of each drug in descending order with respect to TRx_Month_i, for i = 1, 2, 3, 4, 5, 6.
• Added the ability to report trends of total prescriptions (TRx) based on product
    - Created a line graph with four distinct lines correlating to each product. These lines vary over the course of the six months under evaluation, allowing the audience to draw conclusions
• Added the ability to predict future top targets based on new prescriptions (NRx)
    - The trickiest problem to solve–first, we find statistical descriptive counts such as the min, max, and average. Then, if a doctor's total NRx count meets or exceeds the average, he or she advances to the next round. If not, they are not a future top target using this process. After narrowing the field using the average, we next use the cumulative delta change between NRx counts for the remaining doctors. For instance, consider "Nathan Chen" [1,3,14,11,12,19]. To compute the delta change value, d, perform the following calculations: d = (3 - 1) + (14 - 3) + (11 - 14) + (12 - 11) + (19 - 12). We then took the top 6 delta change values and output them in a line graph. The consistent improvement of these doctors makes them optimal candidates for future targeting and we think they will prosper in that role.
