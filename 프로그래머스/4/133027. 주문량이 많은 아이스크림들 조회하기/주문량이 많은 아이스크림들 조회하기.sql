SELECT  A.FLAVOR
  FROM  (
            SELECT  A.FLAVOR
                 ,  RANK() OVER(ORDER BY A.TOTAL_ORDER + B.TOTAL_ORDER DESC) AS RANK
              FROM  FIRST_HALF  A
                 ,  (
                        SELECT  FLAVOR
                             ,  SUM(TOTAL_ORDER) AS TOTAL_ORDER
                          FROM  JULY
                         GROUP  BY FLAVOR
                    )           B
             WHERE  A.FLAVOR = B.FLAVOR
        )   A
 WHERE  A.RANK IN (1,2,3);