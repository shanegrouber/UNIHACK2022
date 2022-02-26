from getheadlines import fetchnews
from parser import getcount
from multiprocessing import Process
import datetime
import time
def main():
    fetchnews()
    getcount()
    time.sleep(10)


if __name__ == "__main__":
    check_time = time.strftime("%H:%M:%S", time.gmtime(10))
    start_time = time.time()
    main()

    while True:
        
        current_time = time.time()
        elapsed_time = current_time - start_time
        t = time.strftime("%H:%M:%S", time.gmtime(elapsed_time))

        print("Uptime: ", t)
        if t > check_time:
            h, m, s = check_time.split(":")
            check_time_u = int(datetime.timedelta(hours=int(h), minutes=int(m), seconds=int(s)).total_seconds())
            check_time = check_time_u + 10
            check_time = time.strftime("%H:%M:%S", time.gmtime(check_time))
            main()
            
