SELECT  *
  FROM  (
            SELECT  A.CAR_ID
                 ,  A.CAR_TYPE
                 ,  30 * A.DAILY_FEE * (1 - (B.DISCOUNT_RATE * 0.01)) AS FEE
              FROM  CAR_RENTAL_COMPANY_CAR              A
                 ,  CAR_RENTAL_COMPANY_DISCOUNT_PLAN    B
             WHERE  A.CAR_TYPE = B.CAR_TYPE
               AND  DURATION_TYPE = '30일 이상'
               AND  A.CAR_TYPE IN ('세단', 'SUV')
               AND  A.CAR_ID NOT IN (
                                        SELECT  A.CAR_ID
                                          FROM  CAR_RENTAL_COMPANY_CAR              A
                                             ,  CAR_RENTAL_COMPANY_RENTAL_HISTORY   B
                                         WHERE  A.CAR_ID = B.CAR_ID
                                           AND  A.CAR_TYPE IN ('세단', 'SUV')
                                           AND  TO_CHAR(B.END_DATE, 'YYYYMMDD') >= '20221101'
                                           AND  TO_CHAR(B.START_DATE, 'YYYYMMDD') < '20221201'
                                    )
        )   A
 WHERE  A.FEE BETWEEN 500000 AND 1999999
 ORDER  BY  FEE DESC
     ,  CAR_TYPE
     ,  CAR_ID DESC