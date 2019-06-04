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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2903.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 2.0], [0.3, 3.0], [0.4, 3.0], [0.5, 4.0], [0.6, 5.0], [0.7, 6.0], [0.8, 6.0], [0.9, 9.0], [1.0, 11.0], [1.1, 21.0], [1.2, 23.0], [1.3, 90.0], [1.4, 93.0], [1.5, 94.0], [1.6, 95.0], [1.7, 96.0], [1.8, 99.0], [1.9, 102.0], [2.0, 185.0], [2.1, 216.0], [2.2, 299.0], [2.3, 300.0], [2.4, 301.0], [2.5, 302.0], [2.6, 316.0], [2.7, 320.0], [2.8, 405.0], [2.9, 419.0], [3.0, 499.0], [3.1, 502.0], [3.2, 505.0], [3.3, 594.0], [3.4, 599.0], [3.5, 606.0], [3.6, 613.0], [3.7, 619.0], [3.8, 697.0], [3.9, 698.0], [4.0, 700.0], [4.1, 700.0], [4.2, 702.0], [4.3, 703.0], [4.4, 703.0], [4.5, 704.0], [4.6, 705.0], [4.7, 706.0], [4.8, 706.0], [4.9, 706.0], [5.0, 708.0], [5.1, 709.0], [5.2, 710.0], [5.3, 717.0], [5.4, 718.0], [5.5, 719.0], [5.6, 791.0], [5.7, 793.0], [5.8, 793.0], [5.9, 794.0], [6.0, 795.0], [6.1, 796.0], [6.2, 798.0], [6.3, 798.0], [6.4, 799.0], [6.5, 799.0], [6.6, 799.0], [6.7, 800.0], [6.8, 801.0], [6.9, 801.0], [7.0, 802.0], [7.1, 803.0], [7.2, 803.0], [7.3, 804.0], [7.4, 805.0], [7.5, 808.0], [7.6, 811.0], [7.7, 816.0], [7.8, 890.0], [7.9, 893.0], [8.0, 895.0], [8.1, 896.0], [8.2, 896.0], [8.3, 897.0], [8.4, 898.0], [8.5, 899.0], [8.6, 899.0], [8.7, 900.0], [8.8, 900.0], [8.9, 900.0], [9.0, 901.0], [9.1, 901.0], [9.2, 901.0], [9.3, 901.0], [9.4, 901.0], [9.5, 901.0], [9.6, 902.0], [9.7, 902.0], [9.8, 902.0], [9.9, 902.0], [10.0, 902.0], [10.1, 903.0], [10.2, 904.0], [10.3, 904.0], [10.4, 904.0], [10.5, 904.0], [10.6, 904.0], [10.7, 904.0], [10.8, 905.0], [10.9, 905.0], [11.0, 905.0], [11.1, 905.0], [11.2, 906.0], [11.3, 906.0], [11.4, 906.0], [11.5, 906.0], [11.6, 907.0], [11.7, 907.0], [11.8, 907.0], [11.9, 907.0], [12.0, 908.0], [12.1, 909.0], [12.2, 910.0], [12.3, 910.0], [12.4, 911.0], [12.5, 912.0], [12.6, 916.0], [12.7, 981.0], [12.8, 989.0], [12.9, 989.0], [13.0, 990.0], [13.1, 990.0], [13.2, 992.0], [13.3, 993.0], [13.4, 993.0], [13.5, 994.0], [13.6, 994.0], [13.7, 994.0], [13.8, 994.0], [13.9, 995.0], [14.0, 995.0], [14.1, 995.0], [14.2, 995.0], [14.3, 996.0], [14.4, 996.0], [14.5, 996.0], [14.6, 996.0], [14.7, 996.0], [14.8, 997.0], [14.9, 997.0], [15.0, 997.0], [15.1, 997.0], [15.2, 997.0], [15.3, 997.0], [15.4, 997.0], [15.5, 997.0], [15.6, 998.0], [15.7, 998.0], [15.8, 998.0], [15.9, 998.0], [16.0, 999.0], [16.1, 999.0], [16.2, 999.0], [16.3, 999.0], [16.4, 999.0], [16.5, 1000.0], [16.6, 1000.0], [16.7, 1001.0], [16.8, 1001.0], [16.9, 1002.0], [17.0, 1002.0], [17.1, 1002.0], [17.2, 1002.0], [17.3, 1003.0], [17.4, 1003.0], [17.5, 1003.0], [17.6, 1004.0], [17.7, 1004.0], [17.8, 1004.0], [17.9, 1005.0], [18.0, 1005.0], [18.1, 1006.0], [18.2, 1007.0], [18.3, 1009.0], [18.4, 1015.0], [18.5, 1085.0], [18.6, 1088.0], [18.7, 1089.0], [18.8, 1091.0], [18.9, 1091.0], [19.0, 1091.0], [19.1, 1092.0], [19.2, 1093.0], [19.3, 1093.0], [19.4, 1094.0], [19.5, 1094.0], [19.6, 1094.0], [19.7, 1095.0], [19.8, 1096.0], [19.9, 1096.0], [20.0, 1096.0], [20.1, 1096.0], [20.2, 1097.0], [20.3, 1097.0], [20.4, 1097.0], [20.5, 1097.0], [20.6, 1097.0], [20.7, 1098.0], [20.8, 1098.0], [20.9, 1099.0], [21.0, 1099.0], [21.1, 1099.0], [21.2, 1099.0], [21.3, 1099.0], [21.4, 1100.0], [21.5, 1100.0], [21.6, 1100.0], [21.7, 1100.0], [21.8, 1100.0], [21.9, 1100.0], [22.0, 1101.0], [22.1, 1101.0], [22.2, 1101.0], [22.3, 1101.0], [22.4, 1101.0], [22.5, 1101.0], [22.6, 1102.0], [22.7, 1102.0], [22.8, 1103.0], [22.9, 1103.0], [23.0, 1103.0], [23.1, 1103.0], [23.2, 1103.0], [23.3, 1104.0], [23.4, 1104.0], [23.5, 1104.0], [23.6, 1104.0], [23.7, 1105.0], [23.8, 1106.0], [23.9, 1106.0], [24.0, 1107.0], [24.1, 1108.0], [24.2, 1109.0], [24.3, 1109.0], [24.4, 1110.0], [24.5, 1118.0], [24.6, 1179.0], [24.7, 1185.0], [24.8, 1186.0], [24.9, 1187.0], [25.0, 1190.0], [25.1, 1193.0], [25.2, 1194.0], [25.3, 1195.0], [25.4, 1195.0], [25.5, 1195.0], [25.6, 1196.0], [25.7, 1196.0], [25.8, 1196.0], [25.9, 1196.0], [26.0, 1197.0], [26.1, 1197.0], [26.2, 1197.0], [26.3, 1197.0], [26.4, 1197.0], [26.5, 1197.0], [26.6, 1198.0], [26.7, 1198.0], [26.8, 1198.0], [26.9, 1198.0], [27.0, 1199.0], [27.1, 1199.0], [27.2, 1199.0], [27.3, 1199.0], [27.4, 1199.0], [27.5, 1199.0], [27.6, 1200.0], [27.7, 1200.0], [27.8, 1200.0], [27.9, 1200.0], [28.0, 1201.0], [28.1, 1201.0], [28.2, 1201.0], [28.3, 1201.0], [28.4, 1201.0], [28.5, 1202.0], [28.6, 1202.0], [28.7, 1202.0], [28.8, 1202.0], [28.9, 1203.0], [29.0, 1203.0], [29.1, 1203.0], [29.2, 1205.0], [29.3, 1206.0], [29.4, 1206.0], [29.5, 1206.0], [29.6, 1209.0], [29.7, 1223.0], [29.8, 1289.0], [29.9, 1292.0], [30.0, 1293.0], [30.1, 1293.0], [30.2, 1294.0], [30.3, 1294.0], [30.4, 1295.0], [30.5, 1295.0], [30.6, 1295.0], [30.7, 1296.0], [30.8, 1296.0], [30.9, 1297.0], [31.0, 1297.0], [31.1, 1297.0], [31.2, 1297.0], [31.3, 1297.0], [31.4, 1298.0], [31.5, 1298.0], [31.6, 1299.0], [31.7, 1299.0], [31.8, 1299.0], [31.9, 1299.0], [32.0, 1299.0], [32.1, 1299.0], [32.2, 1300.0], [32.3, 1300.0], [32.4, 1300.0], [32.5, 1300.0], [32.6, 1300.0], [32.7, 1300.0], [32.8, 1301.0], [32.9, 1301.0], [33.0, 1301.0], [33.1, 1301.0], [33.2, 1301.0], [33.3, 1301.0], [33.4, 1302.0], [33.5, 1302.0], [33.6, 1302.0], [33.7, 1302.0], [33.8, 1302.0], [33.9, 1303.0], [34.0, 1303.0], [34.1, 1303.0], [34.2, 1303.0], [34.3, 1303.0], [34.4, 1303.0], [34.5, 1303.0], [34.6, 1304.0], [34.7, 1304.0], [34.8, 1304.0], [34.9, 1305.0], [35.0, 1305.0], [35.1, 1305.0], [35.2, 1306.0], [35.3, 1306.0], [35.4, 1306.0], [35.5, 1306.0], [35.6, 1307.0], [35.7, 1308.0], [35.8, 1308.0], [35.9, 1308.0], [36.0, 1309.0], [36.1, 1309.0], [36.2, 1311.0], [36.3, 1316.0], [36.4, 1318.0], [36.5, 1319.0], [36.6, 1322.0], [36.7, 1390.0], [36.8, 1391.0], [36.9, 1392.0], [37.0, 1393.0], [37.1, 1393.0], [37.2, 1394.0], [37.3, 1394.0], [37.4, 1395.0], [37.5, 1395.0], [37.6, 1395.0], [37.7, 1395.0], [37.8, 1395.0], [37.9, 1395.0], [38.0, 1396.0], [38.1, 1396.0], [38.2, 1396.0], [38.3, 1396.0], [38.4, 1396.0], [38.5, 1396.0], [38.6, 1397.0], [38.7, 1397.0], [38.8, 1397.0], [38.9, 1397.0], [39.0, 1397.0], [39.1, 1398.0], [39.2, 1398.0], [39.3, 1398.0], [39.4, 1398.0], [39.5, 1398.0], [39.6, 1399.0], [39.7, 1399.0], [39.8, 1399.0], [39.9, 1399.0], [40.0, 1399.0], [40.1, 1399.0], [40.2, 1399.0], [40.3, 1399.0], [40.4, 1400.0], [40.5, 1400.0], [40.6, 1400.0], [40.7, 1400.0], [40.8, 1400.0], [40.9, 1400.0], [41.0, 1400.0], [41.1, 1400.0], [41.2, 1401.0], [41.3, 1401.0], [41.4, 1401.0], [41.5, 1401.0], [41.6, 1401.0], [41.7, 1401.0], [41.8, 1401.0], [41.9, 1402.0], [42.0, 1402.0], [42.1, 1402.0], [42.2, 1402.0], [42.3, 1402.0], [42.4, 1402.0], [42.5, 1403.0], [42.6, 1403.0], [42.7, 1403.0], [42.8, 1403.0], [42.9, 1403.0], [43.0, 1404.0], [43.1, 1404.0], [43.2, 1404.0], [43.3, 1404.0], [43.4, 1405.0], [43.5, 1405.0], [43.6, 1405.0], [43.7, 1405.0], [43.8, 1406.0], [43.9, 1406.0], [44.0, 1407.0], [44.1, 1407.0], [44.2, 1408.0], [44.3, 1408.0], [44.4, 1408.0], [44.5, 1411.0], [44.6, 1416.0], [44.7, 1420.0], [44.8, 1483.0], [44.9, 1492.0], [45.0, 1492.0], [45.1, 1493.0], [45.2, 1494.0], [45.3, 1494.0], [45.4, 1495.0], [45.5, 1495.0], [45.6, 1495.0], [45.7, 1495.0], [45.8, 1495.0], [45.9, 1495.0], [46.0, 1495.0], [46.1, 1496.0], [46.2, 1496.0], [46.3, 1496.0], [46.4, 1496.0], [46.5, 1496.0], [46.6, 1496.0], [46.7, 1497.0], [46.8, 1497.0], [46.9, 1497.0], [47.0, 1497.0], [47.1, 1497.0], [47.2, 1497.0], [47.3, 1497.0], [47.4, 1498.0], [47.5, 1498.0], [47.6, 1498.0], [47.7, 1498.0], [47.8, 1498.0], [47.9, 1498.0], [48.0, 1498.0], [48.1, 1499.0], [48.2, 1499.0], [48.3, 1499.0], [48.4, 1499.0], [48.5, 1499.0], [48.6, 1499.0], [48.7, 1499.0], [48.8, 1499.0], [48.9, 1499.0], [49.0, 1499.0], [49.1, 1499.0], [49.2, 1500.0], [49.3, 1500.0], [49.4, 1500.0], [49.5, 1500.0], [49.6, 1500.0], [49.7, 1500.0], [49.8, 1500.0], [49.9, 1500.0], [50.0, 1500.0], [50.1, 1500.0], [50.2, 1500.0], [50.3, 1501.0], [50.4, 1501.0], [50.5, 1501.0], [50.6, 1501.0], [50.7, 1501.0], [50.8, 1501.0], [50.9, 1501.0], [51.0, 1501.0], [51.1, 1501.0], [51.2, 1501.0], [51.3, 1502.0], [51.4, 1502.0], [51.5, 1502.0], [51.6, 1502.0], [51.7, 1502.0], [51.8, 1502.0], [51.9, 1502.0], [52.0, 1503.0], [52.1, 1503.0], [52.2, 1503.0], [52.3, 1503.0], [52.4, 1503.0], [52.5, 1504.0], [52.6, 1504.0], [52.7, 1505.0], [52.8, 1505.0], [52.9, 1505.0], [53.0, 1505.0], [53.1, 1506.0], [53.2, 1507.0], [53.3, 1508.0], [53.4, 1508.0], [53.5, 1510.0], [53.6, 1520.0], [53.7, 1523.0], [53.8, 1589.0], [53.9, 1591.0], [54.0, 1592.0], [54.1, 1592.0], [54.2, 1593.0], [54.3, 1593.0], [54.4, 1593.0], [54.5, 1594.0], [54.6, 1594.0], [54.7, 1594.0], [54.8, 1594.0], [54.9, 1595.0], [55.0, 1595.0], [55.1, 1596.0], [55.2, 1596.0], [55.3, 1596.0], [55.4, 1596.0], [55.5, 1596.0], [55.6, 1596.0], [55.7, 1597.0], [55.8, 1597.0], [55.9, 1597.0], [56.0, 1597.0], [56.1, 1597.0], [56.2, 1598.0], [56.3, 1598.0], [56.4, 1598.0], [56.5, 1598.0], [56.6, 1598.0], [56.7, 1598.0], [56.8, 1598.0], [56.9, 1598.0], [57.0, 1599.0], [57.1, 1599.0], [57.2, 1599.0], [57.3, 1599.0], [57.4, 1599.0], [57.5, 1599.0], [57.6, 1599.0], [57.7, 1599.0], [57.8, 1600.0], [57.9, 1600.0], [58.0, 1600.0], [58.1, 1600.0], [58.2, 1600.0], [58.3, 1600.0], [58.4, 1600.0], [58.5, 1600.0], [58.6, 1601.0], [58.7, 1601.0], [58.8, 1601.0], [58.9, 1601.0], [59.0, 1601.0], [59.1, 1601.0], [59.2, 1601.0], [59.3, 1601.0], [59.4, 1601.0], [59.5, 1602.0], [59.6, 1602.0], [59.7, 1602.0], [59.8, 1602.0], [59.9, 1602.0], [60.0, 1602.0], [60.1, 1603.0], [60.2, 1603.0], [60.3, 1603.0], [60.4, 1603.0], [60.5, 1603.0], [60.6, 1604.0], [60.7, 1604.0], [60.8, 1604.0], [60.9, 1605.0], [61.0, 1605.0], [61.1, 1605.0], [61.2, 1605.0], [61.3, 1605.0], [61.4, 1605.0], [61.5, 1605.0], [61.6, 1605.0], [61.7, 1607.0], [61.8, 1607.0], [61.9, 1609.0], [62.0, 1611.0], [62.1, 1619.0], [62.2, 1681.0], [62.3, 1685.0], [62.4, 1689.0], [62.5, 1690.0], [62.6, 1691.0], [62.7, 1691.0], [62.8, 1691.0], [62.9, 1693.0], [63.0, 1693.0], [63.1, 1693.0], [63.2, 1694.0], [63.3, 1694.0], [63.4, 1694.0], [63.5, 1695.0], [63.6, 1695.0], [63.7, 1695.0], [63.8, 1695.0], [63.9, 1696.0], [64.0, 1696.0], [64.1, 1696.0], [64.2, 1696.0], [64.3, 1697.0], [64.4, 1697.0], [64.5, 1697.0], [64.6, 1698.0], [64.7, 1698.0], [64.8, 1698.0], [64.9, 1698.0], [65.0, 1698.0], [65.1, 1698.0], [65.2, 1698.0], [65.3, 1699.0], [65.4, 1699.0], [65.5, 1699.0], [65.6, 1699.0], [65.7, 1699.0], [65.8, 1699.0], [65.9, 1699.0], [66.0, 1699.0], [66.1, 1700.0], [66.2, 1700.0], [66.3, 1700.0], [66.4, 1700.0], [66.5, 1700.0], [66.6, 1701.0], [66.7, 1701.0], [66.8, 1701.0], [66.9, 1701.0], [67.0, 1701.0], [67.1, 1702.0], [67.2, 1702.0], [67.3, 1702.0], [67.4, 1702.0], [67.5, 1702.0], [67.6, 1702.0], [67.7, 1703.0], [67.8, 1704.0], [67.9, 1704.0], [68.0, 1704.0], [68.1, 1706.0], [68.2, 1706.0], [68.3, 1706.0], [68.4, 1707.0], [68.5, 1707.0], [68.6, 1708.0], [68.7, 1709.0], [68.8, 1721.0], [68.9, 1777.0], [69.0, 1789.0], [69.1, 1789.0], [69.2, 1790.0], [69.3, 1791.0], [69.4, 1792.0], [69.5, 1793.0], [69.6, 1794.0], [69.7, 1795.0], [69.8, 1796.0], [69.9, 1796.0], [70.0, 1796.0], [70.1, 1796.0], [70.2, 1797.0], [70.3, 1797.0], [70.4, 1797.0], [70.5, 1797.0], [70.6, 1798.0], [70.7, 1798.0], [70.8, 1798.0], [70.9, 1798.0], [71.0, 1798.0], [71.1, 1799.0], [71.2, 1799.0], [71.3, 1799.0], [71.4, 1799.0], [71.5, 1799.0], [71.6, 1800.0], [71.7, 1800.0], [71.8, 1800.0], [71.9, 1800.0], [72.0, 1800.0], [72.1, 1800.0], [72.2, 1801.0], [72.3, 1801.0], [72.4, 1801.0], [72.5, 1801.0], [72.6, 1801.0], [72.7, 1801.0], [72.8, 1802.0], [72.9, 1802.0], [73.0, 1802.0], [73.1, 1803.0], [73.2, 1803.0], [73.3, 1803.0], [73.4, 1803.0], [73.5, 1803.0], [73.6, 1804.0], [73.7, 1804.0], [73.8, 1804.0], [73.9, 1805.0], [74.0, 1805.0], [74.1, 1805.0], [74.2, 1806.0], [74.3, 1806.0], [74.4, 1807.0], [74.5, 1807.0], [74.6, 1810.0], [74.7, 1819.0], [74.8, 1821.0], [74.9, 1891.0], [75.0, 1892.0], [75.1, 1892.0], [75.2, 1895.0], [75.3, 1895.0], [75.4, 1895.0], [75.5, 1896.0], [75.6, 1896.0], [75.7, 1897.0], [75.8, 1897.0], [75.9, 1897.0], [76.0, 1897.0], [76.1, 1898.0], [76.2, 1898.0], [76.3, 1898.0], [76.4, 1898.0], [76.5, 1898.0], [76.6, 1898.0], [76.7, 1898.0], [76.8, 1899.0], [76.9, 1899.0], [77.0, 1899.0], [77.1, 1900.0], [77.2, 1900.0], [77.3, 1901.0], [77.4, 1901.0], [77.5, 1901.0], [77.6, 1902.0], [77.7, 1902.0], [77.8, 1902.0], [77.9, 1903.0], [78.0, 1904.0], [78.1, 1904.0], [78.2, 1905.0], [78.3, 1905.0], [78.4, 1906.0], [78.5, 1906.0], [78.6, 1907.0], [78.7, 1907.0], [78.8, 1908.0], [78.9, 1909.0], [79.0, 1913.0], [79.1, 1921.0], [79.2, 1989.0], [79.3, 1991.0], [79.4, 1992.0], [79.5, 1993.0], [79.6, 1994.0], [79.7, 1994.0], [79.8, 1994.0], [79.9, 1995.0], [80.0, 1995.0], [80.1, 1996.0], [80.2, 1996.0], [80.3, 1996.0], [80.4, 1996.0], [80.5, 1997.0], [80.6, 1997.0], [80.7, 1997.0], [80.8, 1998.0], [80.9, 1998.0], [81.0, 1998.0], [81.1, 1999.0], [81.2, 1999.0], [81.3, 2000.0], [81.4, 2000.0], [81.5, 2000.0], [81.6, 2001.0], [81.7, 2001.0], [81.8, 2001.0], [81.9, 2001.0], [82.0, 2001.0], [82.1, 2001.0], [82.2, 2002.0], [82.3, 2002.0], [82.4, 2003.0], [82.5, 2003.0], [82.6, 2004.0], [82.7, 2005.0], [82.8, 2017.0], [82.9, 2085.0], [83.0, 2092.0], [83.1, 2093.0], [83.2, 2093.0], [83.3, 2094.0], [83.4, 2094.0], [83.5, 2095.0], [83.6, 2095.0], [83.7, 2095.0], [83.8, 2096.0], [83.9, 2097.0], [84.0, 2098.0], [84.1, 2098.0], [84.2, 2098.0], [84.3, 2099.0], [84.4, 2099.0], [84.5, 2101.0], [84.6, 2102.0], [84.7, 2102.0], [84.8, 2102.0], [84.9, 2104.0], [85.0, 2105.0], [85.1, 2107.0], [85.2, 2109.0], [85.3, 2117.0], [85.4, 2122.0], [85.5, 2191.0], [85.6, 2192.0], [85.7, 2193.0], [85.8, 2194.0], [85.9, 2194.0], [86.0, 2195.0], [86.1, 2195.0], [86.2, 2195.0], [86.3, 2196.0], [86.4, 2197.0], [86.5, 2197.0], [86.6, 2197.0], [86.7, 2198.0], [86.8, 2198.0], [86.9, 2199.0], [87.0, 2199.0], [87.1, 2199.0], [87.2, 2200.0], [87.3, 2200.0], [87.4, 2201.0], [87.5, 2201.0], [87.6, 2201.0], [87.7, 2201.0], [87.8, 2201.0], [87.9, 2201.0], [88.0, 2202.0], [88.1, 2202.0], [88.2, 2203.0], [88.3, 2203.0], [88.4, 2203.0], [88.5, 2204.0], [88.6, 2204.0], [88.7, 2205.0], [88.8, 2206.0], [88.9, 2206.0], [89.0, 2207.0], [89.1, 2208.0], [89.2, 2211.0], [89.3, 2217.0], [89.4, 2291.0], [89.5, 2291.0], [89.6, 2292.0], [89.7, 2293.0], [89.8, 2294.0], [89.9, 2294.0], [90.0, 2295.0], [90.1, 2295.0], [90.2, 2296.0], [90.3, 2297.0], [90.4, 2297.0], [90.5, 2297.0], [90.6, 2297.0], [90.7, 2298.0], [90.8, 2298.0], [90.9, 2298.0], [91.0, 2299.0], [91.1, 2299.0], [91.2, 2299.0], [91.3, 2299.0], [91.4, 2300.0], [91.5, 2300.0], [91.6, 2300.0], [91.7, 2301.0], [91.8, 2301.0], [91.9, 2301.0], [92.0, 2301.0], [92.1, 2301.0], [92.2, 2301.0], [92.3, 2302.0], [92.4, 2302.0], [92.5, 2302.0], [92.6, 2303.0], [92.7, 2303.0], [92.8, 2303.0], [92.9, 2303.0], [93.0, 2303.0], [93.1, 2304.0], [93.2, 2306.0], [93.3, 2390.0], [93.4, 2393.0], [93.5, 2393.0], [93.6, 2395.0], [93.7, 2397.0], [93.8, 2397.0], [93.9, 2397.0], [94.0, 2397.0], [94.1, 2398.0], [94.2, 2398.0], [94.3, 2399.0], [94.4, 2399.0], [94.5, 2400.0], [94.6, 2400.0], [94.7, 2401.0], [94.8, 2401.0], [94.9, 2401.0], [95.0, 2402.0], [95.1, 2402.0], [95.2, 2403.0], [95.3, 2403.0], [95.4, 2405.0], [95.5, 2407.0], [95.6, 2408.0], [95.7, 2491.0], [95.8, 2492.0], [95.9, 2492.0], [96.0, 2495.0], [96.1, 2496.0], [96.2, 2498.0], [96.3, 2498.0], [96.4, 2499.0], [96.5, 2499.0], [96.6, 2500.0], [96.7, 2501.0], [96.8, 2502.0], [96.9, 2502.0], [97.0, 2503.0], [97.1, 2505.0], [97.2, 2589.0], [97.3, 2593.0], [97.4, 2596.0], [97.5, 2598.0], [97.6, 2598.0], [97.7, 2598.0], [97.8, 2599.0], [97.9, 2600.0], [98.0, 2601.0], [98.1, 2603.0], [98.2, 2695.0], [98.3, 2696.0], [98.4, 2697.0], [98.5, 2699.0], [98.6, 2700.0], [98.7, 2701.0], [98.8, 2701.0], [98.9, 2702.0], [99.0, 2704.0], [99.1, 2791.0], [99.2, 2793.0], [99.3, 2796.0], [99.4, 2796.0], [99.5, 2797.0], [99.6, 2799.0], [99.7, 2800.0], [99.8, 2801.0], [99.9, 2899.0], [100.0, 2903.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 170.0, "series": [{"data": [[0.0, 36.0], [600.0, 9.0], [700.0, 52.0], [800.0, 38.0], [900.0, 150.0], [1000.0, 93.0], [1100.0, 119.0], [1200.0, 89.0], [1300.0, 156.0], [1400.0, 170.0], [1500.0, 163.0], [100.0, 4.0], [1600.0, 159.0], [1700.0, 107.0], [1800.0, 104.0], [1900.0, 80.0], [2000.0, 62.0], [2100.0, 51.0], [2200.0, 81.0], [2300.0, 60.0], [2400.0, 39.0], [2500.0, 25.0], [2600.0, 14.0], [2700.0, 22.0], [2800.0, 5.0], [2900.0, 1.0], [200.0, 3.0], [300.0, 10.0], [400.0, 5.0], [500.0, 8.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 59.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 953.0, "series": [{"data": [[0.0, 59.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 903.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 953.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.111111111111111, "minX": 1.5596043E12, "maxY": 48.8723634396972, "series": [{"data": [[1.5596043E12, 6.1228070175438605], [1.55960442E12, 5.111111111111111], [1.55960436E12, 48.8723634396972]], "isOverall": false, "label": "Call isPrime\/ with 2147483647 TG", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960442E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 95.5, "minX": 1.0, "maxY": 1702.0, "series": [{"data": [[2.0, 157.53846153846155], [3.0, 317.7142857142857], [4.0, 328.85714285714283], [5.0, 270.77777777777777], [6.0, 95.5], [7.0, 1070.25], [8.0, 771.3333333333334], [9.0, 704.75], [10.0, 1099.5], [11.0, 337.3333333333333], [12.0, 868.6666666666666], [13.0, 1147.5], [14.0, 785.0], [15.0, 1104.0], [16.0, 965.6666666666667], [17.0, 936.3333333333333], [18.0, 1256.0], [19.0, 1247.0], [20.0, 1305.0], [21.0, 776.3636363636364], [22.0, 1199.0], [23.0, 969.0], [24.0, 1702.0], [25.0, 978.5], [26.0, 675.0], [27.0, 1339.6666666666667], [28.0, 974.3333333333333], [29.0, 1034.0], [30.0, 1197.0], [31.0, 1097.2], [32.0, 1177.5], [33.0, 1494.0], [34.0, 1263.0], [35.0, 1348.5], [36.0, 1330.0], [37.0, 1495.0], [38.0, 1355.25], [39.0, 1372.0], [40.0, 1362.8], [41.0, 1371.0], [42.0, 1385.5], [43.0, 1401.6666666666667], [44.0, 1459.5], [45.0, 1439.6666666666667], [46.0, 1533.3333333333333], [47.0, 1560.0], [48.0, 1522.75], [49.0, 1629.3333333333333], [50.0, 1582.8204833141551], [1.0, 1060.5]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}, {"data": [[47.39425587467358, 1522.223498694519]], "isOverall": false, "label": "Call isPrime\/2147483647-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 20.55, "minX": 1.5596043E12, "maxY": 5331.283333333334, "series": [{"data": [[1.5596043E12, 164.35], [1.55960442E12, 25.95], [1.55960436E12, 5331.283333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5596043E12, 130.15], [1.55960442E12, 20.55], [1.55960436E12, 4221.883333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960442E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 132.01754385964915, "minX": 1.5596043E12, "maxY": 1998.3333333333333, "series": [{"data": [[1.5596043E12, 132.01754385964915], [1.55960442E12, 1998.3333333333333], [1.55960436E12, 1562.7625743645253]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960442E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 131.75438596491227, "minX": 1.5596043E12, "maxY": 1998.3333333333333, "series": [{"data": [[1.5596043E12, 131.75438596491227], [1.55960442E12, 1998.3333333333333], [1.55960436E12, 1562.6387236343953]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960442E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.44672796106003165, "minX": 1.5596043E12, "maxY": 0.8888888888888888, "series": [{"data": [[1.5596043E12, 0.8245614035087719], [1.55960442E12, 0.8888888888888888], [1.55960436E12, 0.44672796106003165]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960442E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.5596043E12, "maxY": 2903.0, "series": [{"data": [[1.5596043E12, 495.0], [1.55960442E12, 2098.0], [1.55960436E12, 2903.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5596043E12, 2.0], [1.55960442E12, 1897.0], [1.55960436E12, 499.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5596043E12, 335.0000000000002], [1.55960442E12, 2098.0], [1.55960436E12, 2297.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5596043E12, 495.0], [1.55960442E12, 2098.0], [1.55960436E12, 2749.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5596043E12, 407.29999999999995], [1.55960442E12, 2098.0], [1.55960436E12, 2402.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960442E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 850.5, "minX": 9.0, "maxY": 2397.0, "series": [{"data": [[33.0, 850.5], [35.0, 1507.0], [34.0, 1404.0], [37.0, 1303.0], [36.0, 1402.5], [38.0, 1600.0], [41.0, 1596.5], [40.0, 1392.0], [43.0, 995.0], [44.0, 1101.0], [46.0, 1548.5], [47.0, 1803.0], [52.0, 1548.5], [59.0, 906.0], [68.0, 1086.0], [9.0, 1998.0], [16.0, 1294.0], [17.0, 2397.0], [18.0, 1799.0], [19.0, 2301.0], [20.0, 2249.5], [22.0, 1601.0], [23.0, 1343.0], [24.0, 1398.5], [25.0, 2200.0], [26.0, 1894.5], [27.0, 1899.5], [29.0, 1499.0], [30.0, 1694.5], [31.0, 1798.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 850.0, "minX": 9.0, "maxY": 2397.0, "series": [{"data": [[33.0, 850.0], [35.0, 1507.0], [34.0, 1404.0], [37.0, 1302.0], [36.0, 1402.5], [38.0, 1600.0], [41.0, 1596.0], [40.0, 1392.0], [43.0, 995.0], [44.0, 1101.0], [46.0, 1548.0], [47.0, 1803.0], [52.0, 1548.5], [59.0, 906.0], [68.0, 1086.0], [9.0, 1998.0], [16.0, 1293.5], [17.0, 2397.0], [18.0, 1799.0], [19.0, 2300.0], [20.0, 2249.5], [22.0, 1600.5], [23.0, 1342.5], [24.0, 1398.0], [25.0, 2200.0], [26.0, 1894.0], [27.0, 1899.0], [29.0, 1499.0], [30.0, 1694.5], [31.0, 1797.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.5596043E12, "maxY": 30.716666666666665, "series": [{"data": [[1.5596043E12, 1.2], [1.55960436E12, 30.716666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960436E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.5596043E12, "maxY": 30.816666666666666, "series": [{"data": [[1.5596043E12, 0.95], [1.55960442E12, 0.15], [1.55960436E12, 30.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960442E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.5596043E12, "maxY": 30.816666666666666, "series": [{"data": [[1.5596043E12, 0.95], [1.55960442E12, 0.15], [1.55960436E12, 30.816666666666666]], "isOverall": false, "label": "Call isPrime\/2147483647-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960442E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.5596043E12, "maxY": 30.816666666666666, "series": [{"data": [[1.5596043E12, 0.95], [1.55960442E12, 0.15], [1.55960436E12, 30.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960442E12, "title": "Total Transactions Per Second"}},
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

