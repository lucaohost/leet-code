#!/bin/python3

import math
import os
import random
import re
import sys

def getMaximumEvents(payload):
    print(payload)
    rule = "INCREASING"
    eventsSelected = [payload[0]]
    numParts = 0
    payload.pop(0)
    for event in payload:
        if numParts > 3:
            break
        if event == eventsSelected[-1]:
            eventsSelected.append(event)
        if rule == "INCREASING" and event < eventsSelected[-1]:
            eventsSelected.append(event)
            rule = "DECREASING"
            numParts += 1
            continue
        if rule == "DECREASING" and event > eventsSelected[-1]:
            eventsSelected.append(event)
            rule = "INCREASING"
            numParts += 1
            continue
    return len(eventsSelected)
    

print(getMaximumEvents([9, 2, 1, 3, 3, 1, 2, 1, 2, 3]))