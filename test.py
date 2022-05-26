

n = int(input())
now_pd = int(input())
future_pd = int(input())

now_pd1 = list(map(int, str(now_pd)))
future_pd1 = list(map(int, str(future_pd)))

cnt = 0; i = 0; 
print(now_pd1)
while now_pd1 != future_pd1:
    if(now_pd1[i] == 0):
        now_pd1[i] = 10
    if(future_pd1[i] == 0):
        future_pd1[i] = 10 
      
    if (now_pd1[i] > future_pd1[i]): #67890
        now_pd1[i]-=1
        cnt+=1
    
    elif (now_pd1[i] < future_pd1[i]):
        now_pd1[i]+=1
        cnt+=1
    i+=1
print(cnt)




