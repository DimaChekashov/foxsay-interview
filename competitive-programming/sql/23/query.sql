WITH MaxPayments AS (
    SELECT Goods.good_name, MAX(Payments.unit_price) AS unit_price
    FROM Payments
    JOIN Goods
        ON Goods.good_id = Payments.good
    JOIN GoodTypes
        ON GoodTypes.good_type_id = Goods.type AND GoodTypes.good_type_name = 'delicacies'
    GROUP BY Goods.good_name
)

SELECT mp.good_name, mp.unit_price
FROM MaxPayments mp
WHERE mp.unit_price = (SELECT MAX(unit_price) FROM MaxPayments)