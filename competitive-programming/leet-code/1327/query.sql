SELECT product_name, SUM(unit) AS unit FROM Products
INNER JOIN Orders ON Orders.product_id = Products.product_id
WHERE EXTRACT(YEAR FROM order_date) = 2020 AND EXTRACT(MONTH FROM order_date) = 2
GROUP BY product_name
HAVING SUM(unit) >= 100;