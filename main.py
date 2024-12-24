import requests

apiObject = requests.get("https://whenisthenextmcufilm.com/api").json()
with open("example.txt", "w") as file:
    file.write("The next MCU film is " + apiObject["title"] + " and it will be released on " + str(apiObject["days_until"]) + " days.")