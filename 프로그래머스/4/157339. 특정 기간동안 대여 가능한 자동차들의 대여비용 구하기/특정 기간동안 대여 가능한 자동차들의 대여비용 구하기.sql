SELECT  A.*
  FROM  (
            SELECT  CAR_ID
                 ,  CAR_TYPE
                 ,  CASE WHEN CAR_TYPE = '세단' THEN (DAILY_FEE - (DAILY_FEE * 0.08)) * 30
                    ELSE (DAILY_FEE - (DAILY_FEE * 0.05)) * 30
                    END AS FEE
              FROM  CAR_RENTAL_COMPANY_CAR
             WHERE  CAR_TYPE IN ('세단', 'SUV')
               AND  CAR_ID NOT IN   (
                                        SELECT  A.CAR_ID
                                          FROM  CAR_RENTAL_COMPANY_CAR              A
                                             ,  CAR_RENTAL_COMPANY_RENTAL_HISTORY   B
                                         WHERE  A.CAR_ID = B.CAR_ID
                                           AND  A.CAR_TYPE IN ('세단', 'SUV')
                                           AND  TO_CHAR(B.END_DATE, 'YYYYMMDD') >= '20221101'
                                           AND  TO_CHAR(B.START_DATE, 'YYYYMMDD') <= '20221201'
                                    )
        ) A
 WHERE  A.FEE BETWEEN 500000 AND 1999999
 ORDER  BY  FEE DESC
     ,  CAR_TYPE
     ,  CAR_ID DESC