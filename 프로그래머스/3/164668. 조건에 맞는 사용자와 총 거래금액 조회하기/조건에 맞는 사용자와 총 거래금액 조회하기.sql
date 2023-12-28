SELECT  USER_ID
     ,  NICKNAME
     ,  TOTAL_SALES
  FROM  (
            SELECT  U.USER_ID
                 ,  U.NICKNAME
                 ,  SUM(B.PRICE) AS TOTAL_SALES
              FROM  USED_GOODS_USER  U
                 ,  USED_GOODS_BOARD B
             WHERE  U.USER_ID   = B.WRITER_ID
               AND  B.STATUS    = 'DONE'
             GROUP BY U.USER_ID
                    , U.NICKNAME      
        )
 WHERE  TOTAL_SALES >= 700000
 ORDER BY 3