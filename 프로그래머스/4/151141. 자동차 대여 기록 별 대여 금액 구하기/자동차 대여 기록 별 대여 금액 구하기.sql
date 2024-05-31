SELECT  A.HISTORY_ID
     ,  CASE WHEN A.PERIOD >= 90 THEN A.FEE - (A.FEE * 0.15)
             WHEN A.PERIOD >= 30 AND A.PERIOD < 90 THEN A.FEE - (A.FEE * 0.08)
             WHEN A.PERIOD >= 7  AND A.PERIOD < 30 THEN A.FEE - (A.FEE * 0.05)
        ELSE A.FEE
        END AS FEE
  FROM  (
            SELECT  B.HISTORY_ID
                 ,  (B.END_DATE - B.START_DATE) + 1                 AS PERIOD
                 ,  A.DAILY_FEE * ((B.END_DATE - B.START_DATE) + 1) AS FEE
              FROM  CAR_RENTAL_COMPANY_CAR              A
                 ,  CAR_RENTAL_COMPANY_RENTAL_HISTORY   B
             WHERE  A.CAR_ID    = B.CAR_ID
               AND  A.CAR_TYPE  = '트럭' 
        ) A
 ORDER  BY FEE DESC
     ,  HISTORY_ID DESC