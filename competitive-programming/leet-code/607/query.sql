WITH red_company_id AS (
    SELECT com_id
    FROM Company
    WHERE name = 'RED'
)

SELECT name FROM SalesPerson s
WHERE NOT EXISTS (
    SELECT 1 FROM Orders as o
    WHERE s.sales_id = o.sales_id AND com_id = (SELECT com_id FROM red_company_id)
)