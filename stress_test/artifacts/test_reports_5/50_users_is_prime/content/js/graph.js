/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2501.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 3.0], [0.3, 3.0], [0.4, 4.0], [0.5, 27.0], [0.6, 77.0], [0.7, 91.0], [0.8, 93.0], [0.9, 94.0], [1.0, 98.0], [1.1, 101.0], [1.2, 104.0], [1.3, 109.0], [1.4, 192.0], [1.5, 296.0], [1.6, 301.0], [1.7, 303.0], [1.8, 391.0], [1.9, 394.0], [2.0, 395.0], [2.1, 402.0], [2.2, 486.0], [2.3, 493.0], [2.4, 494.0], [2.5, 498.0], [2.6, 504.0], [2.7, 506.0], [2.8, 512.0], [2.9, 593.0], [3.0, 596.0], [3.1, 598.0], [3.2, 598.0], [3.3, 599.0], [3.4, 600.0], [3.5, 602.0], [3.6, 602.0], [3.7, 603.0], [3.8, 603.0], [3.9, 605.0], [4.0, 605.0], [4.1, 606.0], [4.2, 606.0], [4.3, 608.0], [4.4, 608.0], [4.5, 610.0], [4.6, 688.0], [4.7, 690.0], [4.8, 694.0], [4.9, 694.0], [5.0, 695.0], [5.1, 695.0], [5.2, 697.0], [5.3, 697.0], [5.4, 698.0], [5.5, 698.0], [5.6, 699.0], [5.7, 699.0], [5.8, 700.0], [5.9, 700.0], [6.0, 700.0], [6.1, 700.0], [6.2, 701.0], [6.3, 701.0], [6.4, 701.0], [6.5, 702.0], [6.6, 702.0], [6.7, 702.0], [6.8, 702.0], [6.9, 702.0], [7.0, 703.0], [7.1, 703.0], [7.2, 703.0], [7.3, 704.0], [7.4, 705.0], [7.5, 705.0], [7.6, 705.0], [7.7, 706.0], [7.8, 707.0], [7.9, 712.0], [8.0, 718.0], [8.1, 787.0], [8.2, 788.0], [8.3, 789.0], [8.4, 790.0], [8.5, 791.0], [8.6, 792.0], [8.7, 793.0], [8.8, 793.0], [8.9, 794.0], [9.0, 794.0], [9.1, 795.0], [9.2, 795.0], [9.3, 795.0], [9.4, 796.0], [9.5, 796.0], [9.6, 796.0], [9.7, 797.0], [9.8, 797.0], [9.9, 797.0], [10.0, 797.0], [10.1, 797.0], [10.2, 798.0], [10.3, 798.0], [10.4, 798.0], [10.5, 798.0], [10.6, 798.0], [10.7, 799.0], [10.8, 799.0], [10.9, 799.0], [11.0, 799.0], [11.1, 799.0], [11.2, 799.0], [11.3, 800.0], [11.4, 800.0], [11.5, 800.0], [11.6, 800.0], [11.7, 800.0], [11.8, 800.0], [11.9, 800.0], [12.0, 800.0], [12.1, 800.0], [12.2, 800.0], [12.3, 801.0], [12.4, 801.0], [12.5, 801.0], [12.6, 801.0], [12.7, 801.0], [12.8, 801.0], [12.9, 801.0], [13.0, 802.0], [13.1, 802.0], [13.2, 802.0], [13.3, 802.0], [13.4, 802.0], [13.5, 803.0], [13.6, 803.0], [13.7, 803.0], [13.8, 803.0], [13.9, 803.0], [14.0, 803.0], [14.1, 804.0], [14.2, 804.0], [14.3, 804.0], [14.4, 805.0], [14.5, 805.0], [14.6, 805.0], [14.7, 806.0], [14.8, 806.0], [14.9, 806.0], [15.0, 807.0], [15.1, 807.0], [15.2, 807.0], [15.3, 808.0], [15.4, 808.0], [15.5, 808.0], [15.6, 810.0], [15.7, 810.0], [15.8, 811.0], [15.9, 813.0], [16.0, 814.0], [16.1, 885.0], [16.2, 886.0], [16.3, 889.0], [16.4, 889.0], [16.5, 890.0], [16.6, 891.0], [16.7, 891.0], [16.8, 891.0], [16.9, 892.0], [17.0, 893.0], [17.1, 893.0], [17.2, 893.0], [17.3, 894.0], [17.4, 894.0], [17.5, 895.0], [17.6, 895.0], [17.7, 895.0], [17.8, 895.0], [17.9, 895.0], [18.0, 896.0], [18.1, 896.0], [18.2, 896.0], [18.3, 896.0], [18.4, 896.0], [18.5, 896.0], [18.6, 897.0], [18.7, 897.0], [18.8, 897.0], [18.9, 897.0], [19.0, 898.0], [19.1, 898.0], [19.2, 898.0], [19.3, 898.0], [19.4, 898.0], [19.5, 898.0], [19.6, 898.0], [19.7, 899.0], [19.8, 899.0], [19.9, 899.0], [20.0, 899.0], [20.1, 899.0], [20.2, 899.0], [20.3, 899.0], [20.4, 899.0], [20.5, 899.0], [20.6, 899.0], [20.7, 899.0], [20.8, 900.0], [20.9, 900.0], [21.0, 900.0], [21.1, 900.0], [21.2, 900.0], [21.3, 900.0], [21.4, 900.0], [21.5, 901.0], [21.6, 901.0], [21.7, 901.0], [21.8, 901.0], [21.9, 901.0], [22.0, 901.0], [22.1, 902.0], [22.2, 902.0], [22.3, 902.0], [22.4, 902.0], [22.5, 902.0], [22.6, 902.0], [22.7, 902.0], [22.8, 902.0], [22.9, 902.0], [23.0, 902.0], [23.1, 903.0], [23.2, 903.0], [23.3, 903.0], [23.4, 903.0], [23.5, 904.0], [23.6, 905.0], [23.7, 906.0], [23.8, 906.0], [23.9, 908.0], [24.0, 909.0], [24.1, 913.0], [24.2, 914.0], [24.3, 918.0], [24.4, 986.0], [24.5, 990.0], [24.6, 992.0], [24.7, 993.0], [24.8, 993.0], [24.9, 993.0], [25.0, 994.0], [25.1, 994.0], [25.2, 995.0], [25.3, 995.0], [25.4, 995.0], [25.5, 996.0], [25.6, 996.0], [25.7, 996.0], [25.8, 997.0], [25.9, 997.0], [26.0, 997.0], [26.1, 998.0], [26.2, 998.0], [26.3, 998.0], [26.4, 998.0], [26.5, 998.0], [26.6, 999.0], [26.7, 999.0], [26.8, 999.0], [26.9, 1000.0], [27.0, 1000.0], [27.1, 1000.0], [27.2, 1000.0], [27.3, 1000.0], [27.4, 1001.0], [27.5, 1001.0], [27.6, 1001.0], [27.7, 1001.0], [27.8, 1001.0], [27.9, 1002.0], [28.0, 1002.0], [28.1, 1003.0], [28.2, 1003.0], [28.3, 1004.0], [28.4, 1004.0], [28.5, 1005.0], [28.6, 1005.0], [28.7, 1005.0], [28.8, 1005.0], [28.9, 1006.0], [29.0, 1007.0], [29.1, 1008.0], [29.2, 1008.0], [29.3, 1010.0], [29.4, 1013.0], [29.5, 1089.0], [29.6, 1090.0], [29.7, 1092.0], [29.8, 1092.0], [29.9, 1093.0], [30.0, 1093.0], [30.1, 1094.0], [30.2, 1095.0], [30.3, 1095.0], [30.4, 1096.0], [30.5, 1096.0], [30.6, 1096.0], [30.7, 1097.0], [30.8, 1097.0], [30.9, 1097.0], [31.0, 1097.0], [31.1, 1097.0], [31.2, 1098.0], [31.3, 1098.0], [31.4, 1098.0], [31.5, 1098.0], [31.6, 1098.0], [31.7, 1098.0], [31.8, 1098.0], [31.9, 1098.0], [32.0, 1098.0], [32.1, 1099.0], [32.2, 1099.0], [32.3, 1099.0], [32.4, 1099.0], [32.5, 1099.0], [32.6, 1099.0], [32.7, 1099.0], [32.8, 1099.0], [32.9, 1099.0], [33.0, 1100.0], [33.1, 1100.0], [33.2, 1100.0], [33.3, 1100.0], [33.4, 1100.0], [33.5, 1100.0], [33.6, 1100.0], [33.7, 1100.0], [33.8, 1100.0], [33.9, 1100.0], [34.0, 1100.0], [34.1, 1100.0], [34.2, 1101.0], [34.3, 1101.0], [34.4, 1101.0], [34.5, 1101.0], [34.6, 1101.0], [34.7, 1101.0], [34.8, 1101.0], [34.9, 1101.0], [35.0, 1101.0], [35.1, 1101.0], [35.2, 1101.0], [35.3, 1101.0], [35.4, 1101.0], [35.5, 1102.0], [35.6, 1102.0], [35.7, 1102.0], [35.8, 1102.0], [35.9, 1102.0], [36.0, 1102.0], [36.1, 1102.0], [36.2, 1102.0], [36.3, 1102.0], [36.4, 1103.0], [36.5, 1103.0], [36.6, 1103.0], [36.7, 1103.0], [36.8, 1103.0], [36.9, 1103.0], [37.0, 1104.0], [37.1, 1104.0], [37.2, 1104.0], [37.3, 1104.0], [37.4, 1105.0], [37.5, 1105.0], [37.6, 1105.0], [37.7, 1105.0], [37.8, 1105.0], [37.9, 1106.0], [38.0, 1106.0], [38.1, 1106.0], [38.2, 1106.0], [38.3, 1106.0], [38.4, 1106.0], [38.5, 1107.0], [38.6, 1107.0], [38.7, 1107.0], [38.8, 1107.0], [38.9, 1108.0], [39.0, 1109.0], [39.1, 1110.0], [39.2, 1111.0], [39.3, 1113.0], [39.4, 1187.0], [39.5, 1189.0], [39.6, 1191.0], [39.7, 1192.0], [39.8, 1192.0], [39.9, 1193.0], [40.0, 1193.0], [40.1, 1193.0], [40.2, 1194.0], [40.3, 1194.0], [40.4, 1194.0], [40.5, 1195.0], [40.6, 1195.0], [40.7, 1195.0], [40.8, 1195.0], [40.9, 1195.0], [41.0, 1195.0], [41.1, 1196.0], [41.2, 1196.0], [41.3, 1196.0], [41.4, 1196.0], [41.5, 1196.0], [41.6, 1196.0], [41.7, 1197.0], [41.8, 1197.0], [41.9, 1197.0], [42.0, 1197.0], [42.1, 1197.0], [42.2, 1197.0], [42.3, 1198.0], [42.4, 1198.0], [42.5, 1198.0], [42.6, 1198.0], [42.7, 1198.0], [42.8, 1198.0], [42.9, 1198.0], [43.0, 1198.0], [43.1, 1198.0], [43.2, 1199.0], [43.3, 1199.0], [43.4, 1199.0], [43.5, 1199.0], [43.6, 1199.0], [43.7, 1199.0], [43.8, 1199.0], [43.9, 1199.0], [44.0, 1200.0], [44.1, 1200.0], [44.2, 1200.0], [44.3, 1200.0], [44.4, 1200.0], [44.5, 1200.0], [44.6, 1200.0], [44.7, 1200.0], [44.8, 1200.0], [44.9, 1200.0], [45.0, 1200.0], [45.1, 1201.0], [45.2, 1201.0], [45.3, 1201.0], [45.4, 1201.0], [45.5, 1201.0], [45.6, 1201.0], [45.7, 1201.0], [45.8, 1201.0], [45.9, 1201.0], [46.0, 1201.0], [46.1, 1201.0], [46.2, 1202.0], [46.3, 1202.0], [46.4, 1202.0], [46.5, 1202.0], [46.6, 1202.0], [46.7, 1202.0], [46.8, 1202.0], [46.9, 1202.0], [47.0, 1202.0], [47.1, 1203.0], [47.2, 1203.0], [47.3, 1203.0], [47.4, 1203.0], [47.5, 1203.0], [47.6, 1203.0], [47.7, 1204.0], [47.8, 1204.0], [47.9, 1204.0], [48.0, 1204.0], [48.1, 1204.0], [48.2, 1205.0], [48.3, 1205.0], [48.4, 1205.0], [48.5, 1206.0], [48.6, 1206.0], [48.7, 1206.0], [48.8, 1206.0], [48.9, 1206.0], [49.0, 1207.0], [49.1, 1207.0], [49.2, 1208.0], [49.3, 1210.0], [49.4, 1284.0], [49.5, 1287.0], [49.6, 1292.0], [49.7, 1292.0], [49.8, 1293.0], [49.9, 1293.0], [50.0, 1293.0], [50.1, 1294.0], [50.2, 1294.0], [50.3, 1294.0], [50.4, 1294.0], [50.5, 1295.0], [50.6, 1295.0], [50.7, 1295.0], [50.8, 1295.0], [50.9, 1295.0], [51.0, 1296.0], [51.1, 1296.0], [51.2, 1296.0], [51.3, 1296.0], [51.4, 1297.0], [51.5, 1297.0], [51.6, 1297.0], [51.7, 1297.0], [51.8, 1297.0], [51.9, 1297.0], [52.0, 1298.0], [52.1, 1298.0], [52.2, 1298.0], [52.3, 1298.0], [52.4, 1298.0], [52.5, 1298.0], [52.6, 1299.0], [52.7, 1299.0], [52.8, 1299.0], [52.9, 1299.0], [53.0, 1299.0], [53.1, 1299.0], [53.2, 1300.0], [53.3, 1300.0], [53.4, 1300.0], [53.5, 1300.0], [53.6, 1300.0], [53.7, 1300.0], [53.8, 1300.0], [53.9, 1300.0], [54.0, 1300.0], [54.1, 1300.0], [54.2, 1300.0], [54.3, 1300.0], [54.4, 1301.0], [54.5, 1301.0], [54.6, 1301.0], [54.7, 1301.0], [54.8, 1301.0], [54.9, 1301.0], [55.0, 1302.0], [55.1, 1302.0], [55.2, 1302.0], [55.3, 1302.0], [55.4, 1302.0], [55.5, 1303.0], [55.6, 1303.0], [55.7, 1303.0], [55.8, 1303.0], [55.9, 1303.0], [56.0, 1304.0], [56.1, 1304.0], [56.2, 1304.0], [56.3, 1304.0], [56.4, 1304.0], [56.5, 1305.0], [56.6, 1305.0], [56.7, 1306.0], [56.8, 1306.0], [56.9, 1307.0], [57.0, 1307.0], [57.1, 1307.0], [57.2, 1308.0], [57.3, 1309.0], [57.4, 1309.0], [57.5, 1312.0], [57.6, 1377.0], [57.7, 1390.0], [57.8, 1390.0], [57.9, 1391.0], [58.0, 1392.0], [58.1, 1393.0], [58.2, 1393.0], [58.3, 1393.0], [58.4, 1394.0], [58.5, 1394.0], [58.6, 1395.0], [58.7, 1395.0], [58.8, 1395.0], [58.9, 1395.0], [59.0, 1396.0], [59.1, 1396.0], [59.2, 1396.0], [59.3, 1396.0], [59.4, 1396.0], [59.5, 1396.0], [59.6, 1397.0], [59.7, 1397.0], [59.8, 1397.0], [59.9, 1398.0], [60.0, 1398.0], [60.1, 1398.0], [60.2, 1398.0], [60.3, 1398.0], [60.4, 1399.0], [60.5, 1399.0], [60.6, 1399.0], [60.7, 1400.0], [60.8, 1400.0], [60.9, 1400.0], [61.0, 1400.0], [61.1, 1401.0], [61.2, 1401.0], [61.3, 1401.0], [61.4, 1401.0], [61.5, 1401.0], [61.6, 1402.0], [61.7, 1402.0], [61.8, 1402.0], [61.9, 1403.0], [62.0, 1403.0], [62.1, 1403.0], [62.2, 1403.0], [62.3, 1404.0], [62.4, 1404.0], [62.5, 1404.0], [62.6, 1404.0], [62.7, 1405.0], [62.8, 1406.0], [62.9, 1406.0], [63.0, 1407.0], [63.1, 1407.0], [63.2, 1408.0], [63.3, 1487.0], [63.4, 1489.0], [63.5, 1490.0], [63.6, 1490.0], [63.7, 1492.0], [63.8, 1492.0], [63.9, 1492.0], [64.0, 1493.0], [64.1, 1493.0], [64.2, 1494.0], [64.3, 1495.0], [64.4, 1495.0], [64.5, 1495.0], [64.6, 1495.0], [64.7, 1496.0], [64.8, 1496.0], [64.9, 1496.0], [65.0, 1497.0], [65.1, 1497.0], [65.2, 1497.0], [65.3, 1497.0], [65.4, 1497.0], [65.5, 1497.0], [65.6, 1498.0], [65.7, 1498.0], [65.8, 1498.0], [65.9, 1498.0], [66.0, 1499.0], [66.1, 1499.0], [66.2, 1499.0], [66.3, 1499.0], [66.4, 1500.0], [66.5, 1500.0], [66.6, 1500.0], [66.7, 1500.0], [66.8, 1500.0], [66.9, 1500.0], [67.0, 1500.0], [67.1, 1501.0], [67.2, 1501.0], [67.3, 1501.0], [67.4, 1502.0], [67.5, 1502.0], [67.6, 1502.0], [67.7, 1503.0], [67.8, 1504.0], [67.9, 1504.0], [68.0, 1504.0], [68.1, 1504.0], [68.2, 1504.0], [68.3, 1505.0], [68.4, 1505.0], [68.5, 1506.0], [68.6, 1507.0], [68.7, 1507.0], [68.8, 1507.0], [68.9, 1507.0], [69.0, 1509.0], [69.1, 1510.0], [69.2, 1587.0], [69.3, 1590.0], [69.4, 1591.0], [69.5, 1592.0], [69.6, 1593.0], [69.7, 1593.0], [69.8, 1593.0], [69.9, 1593.0], [70.0, 1594.0], [70.1, 1594.0], [70.2, 1595.0], [70.3, 1595.0], [70.4, 1595.0], [70.5, 1595.0], [70.6, 1596.0], [70.7, 1596.0], [70.8, 1596.0], [70.9, 1596.0], [71.0, 1596.0], [71.1, 1597.0], [71.2, 1597.0], [71.3, 1597.0], [71.4, 1597.0], [71.5, 1597.0], [71.6, 1598.0], [71.7, 1598.0], [71.8, 1599.0], [71.9, 1599.0], [72.0, 1599.0], [72.1, 1599.0], [72.2, 1599.0], [72.3, 1599.0], [72.4, 1600.0], [72.5, 1600.0], [72.6, 1600.0], [72.7, 1600.0], [72.8, 1600.0], [72.9, 1600.0], [73.0, 1601.0], [73.1, 1601.0], [73.2, 1601.0], [73.3, 1601.0], [73.4, 1602.0], [73.5, 1602.0], [73.6, 1602.0], [73.7, 1603.0], [73.8, 1603.0], [73.9, 1603.0], [74.0, 1603.0], [74.1, 1604.0], [74.2, 1604.0], [74.3, 1605.0], [74.4, 1605.0], [74.5, 1606.0], [74.6, 1606.0], [74.7, 1606.0], [74.8, 1607.0], [74.9, 1608.0], [75.0, 1611.0], [75.1, 1683.0], [75.2, 1688.0], [75.3, 1691.0], [75.4, 1692.0], [75.5, 1692.0], [75.6, 1693.0], [75.7, 1693.0], [75.8, 1694.0], [75.9, 1694.0], [76.0, 1694.0], [76.1, 1694.0], [76.2, 1695.0], [76.3, 1695.0], [76.4, 1696.0], [76.5, 1696.0], [76.6, 1696.0], [76.7, 1696.0], [76.8, 1696.0], [76.9, 1696.0], [77.0, 1697.0], [77.1, 1697.0], [77.2, 1697.0], [77.3, 1697.0], [77.4, 1698.0], [77.5, 1698.0], [77.6, 1698.0], [77.7, 1698.0], [77.8, 1698.0], [77.9, 1699.0], [78.0, 1699.0], [78.1, 1699.0], [78.2, 1699.0], [78.3, 1699.0], [78.4, 1700.0], [78.5, 1700.0], [78.6, 1701.0], [78.7, 1701.0], [78.8, 1701.0], [78.9, 1701.0], [79.0, 1701.0], [79.1, 1702.0], [79.2, 1702.0], [79.3, 1702.0], [79.4, 1703.0], [79.5, 1703.0], [79.6, 1703.0], [79.7, 1704.0], [79.8, 1704.0], [79.9, 1705.0], [80.0, 1707.0], [80.1, 1707.0], [80.2, 1708.0], [80.3, 1718.0], [80.4, 1785.0], [80.5, 1789.0], [80.6, 1792.0], [80.7, 1792.0], [80.8, 1793.0], [80.9, 1794.0], [81.0, 1794.0], [81.1, 1795.0], [81.2, 1796.0], [81.3, 1796.0], [81.4, 1797.0], [81.5, 1797.0], [81.6, 1798.0], [81.7, 1798.0], [81.8, 1798.0], [81.9, 1798.0], [82.0, 1799.0], [82.1, 1799.0], [82.2, 1799.0], [82.3, 1800.0], [82.4, 1800.0], [82.5, 1800.0], [82.6, 1800.0], [82.7, 1800.0], [82.8, 1800.0], [82.9, 1800.0], [83.0, 1801.0], [83.1, 1801.0], [83.2, 1801.0], [83.3, 1801.0], [83.4, 1801.0], [83.5, 1801.0], [83.6, 1802.0], [83.7, 1802.0], [83.8, 1804.0], [83.9, 1804.0], [84.0, 1805.0], [84.1, 1805.0], [84.2, 1806.0], [84.3, 1806.0], [84.4, 1807.0], [84.5, 1809.0], [84.6, 1810.0], [84.7, 1810.0], [84.8, 1811.0], [84.9, 1813.0], [85.0, 1823.0], [85.1, 1886.0], [85.2, 1887.0], [85.3, 1890.0], [85.4, 1893.0], [85.5, 1893.0], [85.6, 1894.0], [85.7, 1894.0], [85.8, 1895.0], [85.9, 1895.0], [86.0, 1896.0], [86.1, 1896.0], [86.2, 1897.0], [86.3, 1897.0], [86.4, 1897.0], [86.5, 1898.0], [86.6, 1898.0], [86.7, 1899.0], [86.8, 1899.0], [86.9, 1900.0], [87.0, 1900.0], [87.1, 1901.0], [87.2, 1901.0], [87.3, 1901.0], [87.4, 1902.0], [87.5, 1902.0], [87.6, 1903.0], [87.7, 1903.0], [87.8, 1903.0], [87.9, 1903.0], [88.0, 1903.0], [88.1, 1904.0], [88.2, 1904.0], [88.3, 1905.0], [88.4, 1906.0], [88.5, 1907.0], [88.6, 1910.0], [88.7, 1988.0], [88.8, 1992.0], [88.9, 1993.0], [89.0, 1994.0], [89.1, 1994.0], [89.2, 1995.0], [89.3, 1995.0], [89.4, 1996.0], [89.5, 1996.0], [89.6, 1996.0], [89.7, 1996.0], [89.8, 1996.0], [89.9, 1996.0], [90.0, 1997.0], [90.1, 1998.0], [90.2, 1998.0], [90.3, 1998.0], [90.4, 1998.0], [90.5, 1999.0], [90.6, 1999.0], [90.7, 1999.0], [90.8, 1999.0], [90.9, 2000.0], [91.0, 2000.0], [91.1, 2000.0], [91.2, 2000.0], [91.3, 2001.0], [91.4, 2001.0], [91.5, 2001.0], [91.6, 2001.0], [91.7, 2001.0], [91.8, 2002.0], [91.9, 2002.0], [92.0, 2003.0], [92.1, 2003.0], [92.2, 2003.0], [92.3, 2004.0], [92.4, 2004.0], [92.5, 2004.0], [92.6, 2005.0], [92.7, 2005.0], [92.8, 2006.0], [92.9, 2007.0], [93.0, 2008.0], [93.1, 2011.0], [93.2, 2090.0], [93.3, 2091.0], [93.4, 2093.0], [93.5, 2093.0], [93.6, 2095.0], [93.7, 2095.0], [93.8, 2096.0], [93.9, 2096.0], [94.0, 2097.0], [94.1, 2097.0], [94.2, 2098.0], [94.3, 2099.0], [94.4, 2099.0], [94.5, 2099.0], [94.6, 2100.0], [94.7, 2100.0], [94.8, 2100.0], [94.9, 2101.0], [95.0, 2101.0], [95.1, 2101.0], [95.2, 2102.0], [95.3, 2102.0], [95.4, 2103.0], [95.5, 2104.0], [95.6, 2104.0], [95.7, 2105.0], [95.8, 2106.0], [95.9, 2191.0], [96.0, 2193.0], [96.1, 2194.0], [96.2, 2194.0], [96.3, 2196.0], [96.4, 2196.0], [96.5, 2197.0], [96.6, 2198.0], [96.7, 2199.0], [96.8, 2199.0], [96.9, 2200.0], [97.0, 2200.0], [97.1, 2201.0], [97.2, 2201.0], [97.3, 2202.0], [97.4, 2202.0], [97.5, 2204.0], [97.6, 2205.0], [97.7, 2205.0], [97.8, 2206.0], [97.9, 2208.0], [98.0, 2287.0], [98.1, 2291.0], [98.2, 2293.0], [98.3, 2294.0], [98.4, 2295.0], [98.5, 2296.0], [98.6, 2297.0], [98.7, 2298.0], [98.8, 2298.0], [98.9, 2299.0], [99.0, 2300.0], [99.1, 2300.0], [99.2, 2300.0], [99.3, 2301.0], [99.4, 2302.0], [99.5, 2303.0], [99.6, 2391.0], [99.7, 2393.0], [99.8, 2395.0], [99.9, 2498.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 245.0, "series": [{"data": [[0.0, 24.0], [600.0, 54.0], [700.0, 123.0], [800.0, 210.0], [900.0, 138.0], [1000.0, 136.0], [1100.0, 245.0], [1200.0, 204.0], [1300.0, 168.0], [1400.0, 128.0], [1500.0, 133.0], [100.0, 8.0], [1600.0, 133.0], [1700.0, 89.0], [1800.0, 102.0], [1900.0, 88.0], [2000.0, 83.0], [2100.0, 52.0], [2200.0, 47.0], [2300.0, 19.0], [2400.0, 3.0], [2500.0, 1.0], [200.0, 3.0], [300.0, 11.0], [400.0, 10.0], [500.0, 19.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 57.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1438.0, "series": [{"data": [[0.0, 57.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1438.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 736.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 47.481404958677686, "minX": 1.55960478E12, "maxY": 47.7361190612478, "series": [{"data": [[1.55960478E12, 47.7361190612478], [1.55960484E12, 47.481404958677686]], "isOverall": false, "label": "Call isPrime\/ with 2147483647 TG", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960484E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 21.444444444444443, "minX": 2.0, "maxY": 2003.0, "series": [{"data": [[2.0, 21.444444444444443], [3.0, 656.2], [4.0, 397.5], [5.0, 482.8], [6.0, 498.8], [7.0, 601.75], [8.0, 1102.0], [9.0, 2003.0], [10.0, 698.4], [11.0, 1153.0], [12.0, 821.5], [13.0, 595.8333333333334], [14.0, 1094.5], [15.0, 595.8333333333333], [16.0, 1045.5], [17.0, 1606.0], [18.0, 544.0], [19.0, 916.6666666666666], [20.0, 970.3333333333333], [21.0, 997.3333333333333], [22.0, 701.0], [23.0, 1396.3333333333333], [24.0, 860.0], [25.0, 809.3333333333334], [26.0, 743.0], [27.0, 1147.0], [28.0, 733.5], [29.0, 899.6666666666667], [30.0, 874.0], [31.0, 1600.0], [32.0, 998.25], [33.0, 867.1000000000001], [34.0, 995.6666666666666], [35.0, 807.5], [36.0, 965.0], [37.0, 795.5], [39.0, 992.3333333333334], [38.0, 1299.5], [40.0, 942.4285714285714], [41.0, 967.0], [42.0, 919.6666666666666], [43.0, 1066.3333333333333], [44.0, 1131.0], [45.0, 1135.3333333333333], [46.0, 1154.0], [47.0, 1224.0], [48.0, 1269.3333333333333], [49.0, 1363.6666666666667], [50.0, 1360.309207287051]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}, {"data": [[47.6808606006275, 1312.8484984311988]], "isOverall": false, "label": "Call isPrime\/2147483647-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1105.1333333333334, "minX": 1.55960478E12, "maxY": 5037.183333333333, "series": [{"data": [[1.55960478E12, 5037.183333333333], [1.55960484E12, 1395.5333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55960478E12, 3988.983333333333], [1.55960484E12, 1105.1333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960484E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1250.3073840870065, "minX": 1.55960478E12, "maxY": 1538.5909090909086, "series": [{"data": [[1.55960478E12, 1250.3073840870065], [1.55960484E12, 1538.5909090909086]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960484E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1250.2123640526615, "minX": 1.55960478E12, "maxY": 1538.5185950413231, "series": [{"data": [[1.55960478E12, 1250.2123640526615], [1.55960484E12, 1538.5185950413231]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960484E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.23140495867768612, "minX": 1.55960478E12, "maxY": 0.4155695477962226, "series": [{"data": [[1.55960478E12, 0.4155695477962226], [1.55960484E12, 0.23140495867768612]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960484E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.55960478E12, "maxY": 2501.0, "series": [{"data": [[1.55960478E12, 2501.0], [1.55960484E12, 2395.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55960478E12, 2.0], [1.55960484E12, 703.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55960478E12, 1894.0], [1.55960484E12, 2103.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55960478E12, 2298.0], [1.55960484E12, 2302.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55960478E12, 2004.0], [1.55960484E12, 2202.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960484E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 641.0, "minX": 13.0, "maxY": 2101.0, "series": [{"data": [[32.0, 641.0], [35.0, 1806.0], [34.0, 1401.5], [37.0, 1097.0], [39.0, 1044.5], [38.0, 1552.0], [41.0, 1395.5], [43.0, 1399.0], [42.0, 906.0], [44.0, 1653.5], [46.0, 1001.5], [47.0, 1050.0], [49.0, 1097.0], [48.0, 1099.5], [51.0, 1106.5], [50.0, 1898.0], [55.0, 1003.5], [57.0, 899.0], [61.0, 1101.0], [64.0, 801.0], [13.0, 2003.0], [17.0, 1648.5], [19.0, 2101.0], [20.0, 1908.5], [21.0, 896.5], [22.0, 1752.0], [23.0, 1910.0], [24.0, 1801.5], [25.0, 994.0], [26.0, 1098.0], [27.0, 1890.0], [28.0, 1700.0], [30.0, 995.5], [31.0, 1804.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 641.0, "minX": 13.0, "maxY": 2101.0, "series": [{"data": [[32.0, 641.0], [35.0, 1806.0], [34.0, 1401.5], [37.0, 1097.0], [39.0, 1044.5], [38.0, 1551.5], [41.0, 1395.5], [43.0, 1399.0], [42.0, 906.0], [44.0, 1653.0], [46.0, 1001.5], [47.0, 1050.0], [49.0, 1097.0], [48.0, 1099.5], [51.0, 1106.5], [50.0, 1898.0], [55.0, 1003.5], [57.0, 899.0], [61.0, 1101.0], [64.0, 801.0], [13.0, 2003.0], [17.0, 1648.0], [19.0, 2101.0], [20.0, 1908.0], [21.0, 896.0], [22.0, 1752.0], [23.0, 1910.0], [24.0, 1801.5], [25.0, 993.0], [26.0, 1098.0], [27.0, 1889.5], [28.0, 1700.0], [30.0, 995.5], [31.0, 1804.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 7.233333333333333, "minX": 1.55960478E12, "maxY": 29.95, "series": [{"data": [[1.55960478E12, 29.95], [1.55960484E12, 7.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960484E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.066666666666666, "minX": 1.55960478E12, "maxY": 29.116666666666667, "series": [{"data": [[1.55960478E12, 29.116666666666667], [1.55960484E12, 8.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960484E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.066666666666666, "minX": 1.55960478E12, "maxY": 29.116666666666667, "series": [{"data": [[1.55960478E12, 29.116666666666667], [1.55960484E12, 8.066666666666666]], "isOverall": false, "label": "Call isPrime\/2147483647-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960484E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.066666666666666, "minX": 1.55960478E12, "maxY": 29.116666666666667, "series": [{"data": [[1.55960478E12, 29.116666666666667], [1.55960484E12, 8.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960484E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

