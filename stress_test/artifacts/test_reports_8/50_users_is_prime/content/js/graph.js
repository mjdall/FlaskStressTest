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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2689.0, "series": [{"data": [[0.0, 2.0], [0.1, 3.0], [0.2, 3.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 5.0], [0.7, 5.0], [0.8, 6.0], [0.9, 6.0], [1.0, 8.0], [1.1, 9.0], [1.2, 26.0], [1.3, 49.0], [1.4, 57.0], [1.5, 86.0], [1.6, 91.0], [1.7, 92.0], [1.8, 95.0], [1.9, 95.0], [2.0, 97.0], [2.1, 99.0], [2.2, 148.0], [2.3, 196.0], [2.4, 199.0], [2.5, 200.0], [2.6, 250.0], [2.7, 300.0], [2.8, 300.0], [2.9, 301.0], [3.0, 302.0], [3.1, 302.0], [3.2, 303.0], [3.3, 304.0], [3.4, 344.0], [3.5, 346.0], [3.6, 348.0], [3.7, 391.0], [3.8, 395.0], [3.9, 396.0], [4.0, 399.0], [4.1, 590.0], [4.2, 595.0], [4.3, 598.0], [4.4, 602.0], [4.5, 606.0], [4.6, 649.0], [4.7, 704.0], [4.8, 706.0], [4.9, 709.0], [5.0, 715.0], [5.1, 751.0], [5.2, 798.0], [5.3, 799.0], [5.4, 800.0], [5.5, 800.0], [5.6, 800.0], [5.7, 801.0], [5.8, 803.0], [5.9, 803.0], [6.0, 803.0], [6.1, 805.0], [6.2, 807.0], [6.3, 848.0], [6.4, 849.0], [6.5, 850.0], [6.6, 853.0], [6.7, 882.0], [6.8, 892.0], [6.9, 895.0], [7.0, 895.0], [7.1, 895.0], [7.2, 896.0], [7.3, 897.0], [7.4, 897.0], [7.5, 898.0], [7.6, 898.0], [7.7, 898.0], [7.8, 898.0], [7.9, 899.0], [8.0, 900.0], [8.1, 901.0], [8.2, 901.0], [8.3, 902.0], [8.4, 902.0], [8.5, 902.0], [8.6, 903.0], [8.7, 903.0], [8.8, 903.0], [8.9, 904.0], [9.0, 904.0], [9.1, 904.0], [9.2, 906.0], [9.3, 906.0], [9.4, 944.0], [9.5, 945.0], [9.6, 945.0], [9.7, 951.0], [9.8, 976.0], [9.9, 988.0], [10.0, 988.0], [10.1, 991.0], [10.2, 992.0], [10.3, 993.0], [10.4, 993.0], [10.5, 996.0], [10.6, 997.0], [10.7, 998.0], [10.8, 1000.0], [10.9, 1002.0], [11.0, 1006.0], [11.1, 1014.0], [11.2, 1018.0], [11.3, 1024.0], [11.4, 1050.0], [11.5, 1077.0], [11.6, 1091.0], [11.7, 1094.0], [11.8, 1098.0], [11.9, 1099.0], [12.0, 1100.0], [12.1, 1101.0], [12.2, 1101.0], [12.3, 1102.0], [12.4, 1102.0], [12.5, 1103.0], [12.6, 1103.0], [12.7, 1103.0], [12.8, 1103.0], [12.9, 1104.0], [13.0, 1105.0], [13.1, 1106.0], [13.2, 1108.0], [13.3, 1112.0], [13.4, 1114.0], [13.5, 1147.0], [13.6, 1153.0], [13.7, 1176.0], [13.8, 1187.0], [13.9, 1187.0], [14.0, 1193.0], [14.1, 1195.0], [14.2, 1197.0], [14.3, 1197.0], [14.4, 1197.0], [14.5, 1198.0], [14.6, 1198.0], [14.7, 1198.0], [14.8, 1198.0], [14.9, 1198.0], [15.0, 1199.0], [15.1, 1199.0], [15.2, 1200.0], [15.3, 1200.0], [15.4, 1200.0], [15.5, 1200.0], [15.6, 1201.0], [15.7, 1201.0], [15.8, 1201.0], [15.9, 1202.0], [16.0, 1202.0], [16.1, 1203.0], [16.2, 1203.0], [16.3, 1203.0], [16.4, 1204.0], [16.5, 1204.0], [16.6, 1205.0], [16.7, 1206.0], [16.8, 1208.0], [16.9, 1209.0], [17.0, 1213.0], [17.1, 1215.0], [17.2, 1252.0], [17.3, 1289.0], [17.4, 1290.0], [17.5, 1294.0], [17.6, 1295.0], [17.7, 1295.0], [17.8, 1295.0], [17.9, 1295.0], [18.0, 1296.0], [18.1, 1296.0], [18.2, 1297.0], [18.3, 1297.0], [18.4, 1298.0], [18.5, 1298.0], [18.6, 1299.0], [18.7, 1299.0], [18.8, 1300.0], [18.9, 1300.0], [19.0, 1300.0], [19.1, 1300.0], [19.2, 1301.0], [19.3, 1302.0], [19.4, 1302.0], [19.5, 1302.0], [19.6, 1303.0], [19.7, 1304.0], [19.8, 1304.0], [19.9, 1304.0], [20.0, 1304.0], [20.1, 1305.0], [20.2, 1305.0], [20.3, 1305.0], [20.4, 1306.0], [20.5, 1307.0], [20.6, 1311.0], [20.7, 1312.0], [20.8, 1345.0], [20.9, 1350.0], [21.0, 1352.0], [21.1, 1391.0], [21.2, 1392.0], [21.3, 1392.0], [21.4, 1393.0], [21.5, 1394.0], [21.6, 1394.0], [21.7, 1395.0], [21.8, 1395.0], [21.9, 1396.0], [22.0, 1396.0], [22.1, 1397.0], [22.2, 1397.0], [22.3, 1397.0], [22.4, 1397.0], [22.5, 1398.0], [22.6, 1398.0], [22.7, 1398.0], [22.8, 1399.0], [22.9, 1399.0], [23.0, 1400.0], [23.1, 1400.0], [23.2, 1400.0], [23.3, 1401.0], [23.4, 1401.0], [23.5, 1401.0], [23.6, 1401.0], [23.7, 1402.0], [23.8, 1402.0], [23.9, 1402.0], [24.0, 1402.0], [24.1, 1403.0], [24.2, 1403.0], [24.3, 1403.0], [24.4, 1403.0], [24.5, 1403.0], [24.6, 1403.0], [24.7, 1404.0], [24.8, 1404.0], [24.9, 1405.0], [25.0, 1405.0], [25.1, 1406.0], [25.2, 1407.0], [25.3, 1407.0], [25.4, 1407.0], [25.5, 1408.0], [25.6, 1408.0], [25.7, 1409.0], [25.8, 1410.0], [25.9, 1462.0], [26.0, 1481.0], [26.1, 1490.0], [26.2, 1493.0], [26.3, 1493.0], [26.4, 1494.0], [26.5, 1495.0], [26.6, 1495.0], [26.7, 1496.0], [26.8, 1496.0], [26.9, 1496.0], [27.0, 1496.0], [27.1, 1496.0], [27.2, 1496.0], [27.3, 1496.0], [27.4, 1497.0], [27.5, 1497.0], [27.6, 1497.0], [27.7, 1497.0], [27.8, 1497.0], [27.9, 1497.0], [28.0, 1497.0], [28.1, 1497.0], [28.2, 1498.0], [28.3, 1498.0], [28.4, 1498.0], [28.5, 1498.0], [28.6, 1498.0], [28.7, 1499.0], [28.8, 1499.0], [28.9, 1499.0], [29.0, 1499.0], [29.1, 1499.0], [29.2, 1499.0], [29.3, 1499.0], [29.4, 1500.0], [29.5, 1500.0], [29.6, 1500.0], [29.7, 1500.0], [29.8, 1500.0], [29.9, 1500.0], [30.0, 1500.0], [30.1, 1500.0], [30.2, 1500.0], [30.3, 1501.0], [30.4, 1501.0], [30.5, 1501.0], [30.6, 1501.0], [30.7, 1501.0], [30.8, 1501.0], [30.9, 1501.0], [31.0, 1502.0], [31.1, 1502.0], [31.2, 1502.0], [31.3, 1502.0], [31.4, 1502.0], [31.5, 1502.0], [31.6, 1502.0], [31.7, 1502.0], [31.8, 1502.0], [31.9, 1503.0], [32.0, 1503.0], [32.1, 1503.0], [32.2, 1503.0], [32.3, 1503.0], [32.4, 1503.0], [32.5, 1504.0], [32.6, 1505.0], [32.7, 1505.0], [32.8, 1505.0], [32.9, 1506.0], [33.0, 1506.0], [33.1, 1506.0], [33.2, 1506.0], [33.3, 1507.0], [33.4, 1507.0], [33.5, 1507.0], [33.6, 1508.0], [33.7, 1508.0], [33.8, 1509.0], [33.9, 1509.0], [34.0, 1511.0], [34.1, 1512.0], [34.2, 1547.0], [34.3, 1587.0], [34.4, 1590.0], [34.5, 1591.0], [34.6, 1592.0], [34.7, 1592.0], [34.8, 1593.0], [34.9, 1593.0], [35.0, 1594.0], [35.1, 1594.0], [35.2, 1594.0], [35.3, 1594.0], [35.4, 1595.0], [35.5, 1595.0], [35.6, 1595.0], [35.7, 1595.0], [35.8, 1596.0], [35.9, 1596.0], [36.0, 1596.0], [36.1, 1597.0], [36.2, 1597.0], [36.3, 1597.0], [36.4, 1597.0], [36.5, 1597.0], [36.6, 1597.0], [36.7, 1597.0], [36.8, 1598.0], [36.9, 1598.0], [37.0, 1598.0], [37.1, 1598.0], [37.2, 1598.0], [37.3, 1598.0], [37.4, 1598.0], [37.5, 1598.0], [37.6, 1598.0], [37.7, 1598.0], [37.8, 1599.0], [37.9, 1599.0], [38.0, 1599.0], [38.1, 1599.0], [38.2, 1599.0], [38.3, 1599.0], [38.4, 1599.0], [38.5, 1599.0], [38.6, 1600.0], [38.7, 1600.0], [38.8, 1600.0], [38.9, 1600.0], [39.0, 1600.0], [39.1, 1600.0], [39.2, 1600.0], [39.3, 1600.0], [39.4, 1600.0], [39.5, 1600.0], [39.6, 1600.0], [39.7, 1601.0], [39.8, 1601.0], [39.9, 1601.0], [40.0, 1601.0], [40.1, 1601.0], [40.2, 1601.0], [40.3, 1601.0], [40.4, 1601.0], [40.5, 1601.0], [40.6, 1601.0], [40.7, 1601.0], [40.8, 1602.0], [40.9, 1602.0], [41.0, 1602.0], [41.1, 1602.0], [41.2, 1602.0], [41.3, 1602.0], [41.4, 1602.0], [41.5, 1602.0], [41.6, 1602.0], [41.7, 1603.0], [41.8, 1603.0], [41.9, 1603.0], [42.0, 1603.0], [42.1, 1603.0], [42.2, 1603.0], [42.3, 1604.0], [42.4, 1604.0], [42.5, 1604.0], [42.6, 1604.0], [42.7, 1604.0], [42.8, 1604.0], [42.9, 1604.0], [43.0, 1605.0], [43.1, 1605.0], [43.2, 1605.0], [43.3, 1605.0], [43.4, 1606.0], [43.5, 1606.0], [43.6, 1606.0], [43.7, 1606.0], [43.8, 1607.0], [43.9, 1607.0], [44.0, 1608.0], [44.1, 1608.0], [44.2, 1608.0], [44.3, 1609.0], [44.4, 1628.0], [44.5, 1687.0], [44.6, 1687.0], [44.7, 1689.0], [44.8, 1690.0], [44.9, 1692.0], [45.0, 1692.0], [45.1, 1692.0], [45.2, 1693.0], [45.3, 1694.0], [45.4, 1694.0], [45.5, 1694.0], [45.6, 1694.0], [45.7, 1694.0], [45.8, 1694.0], [45.9, 1695.0], [46.0, 1696.0], [46.1, 1696.0], [46.2, 1696.0], [46.3, 1696.0], [46.4, 1696.0], [46.5, 1697.0], [46.6, 1697.0], [46.7, 1697.0], [46.8, 1698.0], [46.9, 1698.0], [47.0, 1698.0], [47.1, 1698.0], [47.2, 1698.0], [47.3, 1698.0], [47.4, 1698.0], [47.5, 1698.0], [47.6, 1698.0], [47.7, 1699.0], [47.8, 1699.0], [47.9, 1699.0], [48.0, 1699.0], [48.1, 1699.0], [48.2, 1699.0], [48.3, 1699.0], [48.4, 1699.0], [48.5, 1699.0], [48.6, 1699.0], [48.7, 1699.0], [48.8, 1700.0], [48.9, 1700.0], [49.0, 1700.0], [49.1, 1700.0], [49.2, 1700.0], [49.3, 1700.0], [49.4, 1700.0], [49.5, 1700.0], [49.6, 1700.0], [49.7, 1701.0], [49.8, 1701.0], [49.9, 1701.0], [50.0, 1701.0], [50.1, 1701.0], [50.2, 1701.0], [50.3, 1701.0], [50.4, 1701.0], [50.5, 1701.0], [50.6, 1701.0], [50.7, 1701.0], [50.8, 1701.0], [50.9, 1702.0], [51.0, 1702.0], [51.1, 1702.0], [51.2, 1702.0], [51.3, 1702.0], [51.4, 1702.0], [51.5, 1702.0], [51.6, 1702.0], [51.7, 1702.0], [51.8, 1703.0], [51.9, 1703.0], [52.0, 1703.0], [52.1, 1703.0], [52.2, 1703.0], [52.3, 1703.0], [52.4, 1703.0], [52.5, 1703.0], [52.6, 1703.0], [52.7, 1703.0], [52.8, 1704.0], [52.9, 1704.0], [53.0, 1704.0], [53.1, 1704.0], [53.2, 1705.0], [53.3, 1705.0], [53.4, 1705.0], [53.5, 1705.0], [53.6, 1705.0], [53.7, 1706.0], [53.8, 1706.0], [53.9, 1706.0], [54.0, 1707.0], [54.1, 1707.0], [54.2, 1707.0], [54.3, 1707.0], [54.4, 1708.0], [54.5, 1709.0], [54.6, 1711.0], [54.7, 1753.0], [54.8, 1787.0], [54.9, 1788.0], [55.0, 1789.0], [55.1, 1790.0], [55.2, 1791.0], [55.3, 1791.0], [55.4, 1792.0], [55.5, 1793.0], [55.6, 1793.0], [55.7, 1793.0], [55.8, 1793.0], [55.9, 1794.0], [56.0, 1794.0], [56.1, 1794.0], [56.2, 1794.0], [56.3, 1794.0], [56.4, 1795.0], [56.5, 1795.0], [56.6, 1795.0], [56.7, 1795.0], [56.8, 1795.0], [56.9, 1795.0], [57.0, 1796.0], [57.1, 1796.0], [57.2, 1796.0], [57.3, 1796.0], [57.4, 1796.0], [57.5, 1796.0], [57.6, 1796.0], [57.7, 1796.0], [57.8, 1796.0], [57.9, 1797.0], [58.0, 1797.0], [58.1, 1797.0], [58.2, 1797.0], [58.3, 1797.0], [58.4, 1798.0], [58.5, 1798.0], [58.6, 1798.0], [58.7, 1798.0], [58.8, 1798.0], [58.9, 1798.0], [59.0, 1798.0], [59.1, 1798.0], [59.2, 1798.0], [59.3, 1798.0], [59.4, 1799.0], [59.5, 1799.0], [59.6, 1799.0], [59.7, 1799.0], [59.8, 1799.0], [59.9, 1799.0], [60.0, 1799.0], [60.1, 1799.0], [60.2, 1799.0], [60.3, 1800.0], [60.4, 1800.0], [60.5, 1800.0], [60.6, 1800.0], [60.7, 1800.0], [60.8, 1800.0], [60.9, 1800.0], [61.0, 1801.0], [61.1, 1801.0], [61.2, 1801.0], [61.3, 1801.0], [61.4, 1801.0], [61.5, 1801.0], [61.6, 1801.0], [61.7, 1801.0], [61.8, 1801.0], [61.9, 1801.0], [62.0, 1801.0], [62.1, 1801.0], [62.2, 1801.0], [62.3, 1802.0], [62.4, 1802.0], [62.5, 1802.0], [62.6, 1802.0], [62.7, 1802.0], [62.8, 1802.0], [62.9, 1802.0], [63.0, 1802.0], [63.1, 1803.0], [63.2, 1803.0], [63.3, 1803.0], [63.4, 1803.0], [63.5, 1803.0], [63.6, 1803.0], [63.7, 1803.0], [63.8, 1803.0], [63.9, 1803.0], [64.0, 1804.0], [64.1, 1804.0], [64.2, 1804.0], [64.3, 1804.0], [64.4, 1804.0], [64.5, 1805.0], [64.6, 1805.0], [64.7, 1805.0], [64.8, 1806.0], [64.9, 1806.0], [65.0, 1806.0], [65.1, 1806.0], [65.2, 1807.0], [65.3, 1807.0], [65.4, 1807.0], [65.5, 1808.0], [65.6, 1809.0], [65.7, 1809.0], [65.8, 1809.0], [65.9, 1809.0], [66.0, 1812.0], [66.1, 1813.0], [66.2, 1818.0], [66.3, 1851.0], [66.4, 1882.0], [66.5, 1887.0], [66.6, 1888.0], [66.7, 1890.0], [66.8, 1891.0], [66.9, 1892.0], [67.0, 1892.0], [67.1, 1892.0], [67.2, 1893.0], [67.3, 1893.0], [67.4, 1893.0], [67.5, 1894.0], [67.6, 1894.0], [67.7, 1894.0], [67.8, 1895.0], [67.9, 1895.0], [68.0, 1895.0], [68.1, 1895.0], [68.2, 1895.0], [68.3, 1895.0], [68.4, 1895.0], [68.5, 1895.0], [68.6, 1895.0], [68.7, 1895.0], [68.8, 1896.0], [68.9, 1896.0], [69.0, 1896.0], [69.1, 1896.0], [69.2, 1896.0], [69.3, 1896.0], [69.4, 1896.0], [69.5, 1896.0], [69.6, 1896.0], [69.7, 1897.0], [69.8, 1897.0], [69.9, 1897.0], [70.0, 1897.0], [70.1, 1897.0], [70.2, 1897.0], [70.3, 1897.0], [70.4, 1897.0], [70.5, 1898.0], [70.6, 1898.0], [70.7, 1898.0], [70.8, 1898.0], [70.9, 1898.0], [71.0, 1898.0], [71.1, 1898.0], [71.2, 1898.0], [71.3, 1898.0], [71.4, 1898.0], [71.5, 1898.0], [71.6, 1899.0], [71.7, 1899.0], [71.8, 1899.0], [71.9, 1899.0], [72.0, 1899.0], [72.1, 1899.0], [72.2, 1899.0], [72.3, 1899.0], [72.4, 1899.0], [72.5, 1900.0], [72.6, 1900.0], [72.7, 1900.0], [72.8, 1900.0], [72.9, 1900.0], [73.0, 1900.0], [73.1, 1900.0], [73.2, 1900.0], [73.3, 1900.0], [73.4, 1900.0], [73.5, 1900.0], [73.6, 1900.0], [73.7, 1901.0], [73.8, 1901.0], [73.9, 1901.0], [74.0, 1901.0], [74.1, 1901.0], [74.2, 1901.0], [74.3, 1901.0], [74.4, 1901.0], [74.5, 1901.0], [74.6, 1902.0], [74.7, 1902.0], [74.8, 1902.0], [74.9, 1902.0], [75.0, 1902.0], [75.1, 1903.0], [75.2, 1903.0], [75.3, 1903.0], [75.4, 1903.0], [75.5, 1903.0], [75.6, 1903.0], [75.7, 1903.0], [75.8, 1903.0], [75.9, 1904.0], [76.0, 1904.0], [76.1, 1905.0], [76.2, 1905.0], [76.3, 1905.0], [76.4, 1905.0], [76.5, 1906.0], [76.6, 1906.0], [76.7, 1907.0], [76.8, 1907.0], [76.9, 1907.0], [77.0, 1908.0], [77.1, 1909.0], [77.2, 1910.0], [77.3, 1910.0], [77.4, 1910.0], [77.5, 1914.0], [77.6, 1990.0], [77.7, 1991.0], [77.8, 1991.0], [77.9, 1992.0], [78.0, 1992.0], [78.1, 1993.0], [78.2, 1993.0], [78.3, 1993.0], [78.4, 1993.0], [78.5, 1993.0], [78.6, 1994.0], [78.7, 1994.0], [78.8, 1994.0], [78.9, 1994.0], [79.0, 1994.0], [79.1, 1994.0], [79.2, 1995.0], [79.3, 1995.0], [79.4, 1995.0], [79.5, 1995.0], [79.6, 1995.0], [79.7, 1996.0], [79.8, 1996.0], [79.9, 1996.0], [80.0, 1996.0], [80.1, 1996.0], [80.2, 1996.0], [80.3, 1996.0], [80.4, 1996.0], [80.5, 1996.0], [80.6, 1996.0], [80.7, 1996.0], [80.8, 1997.0], [80.9, 1997.0], [81.0, 1997.0], [81.1, 1997.0], [81.2, 1997.0], [81.3, 1997.0], [81.4, 1997.0], [81.5, 1997.0], [81.6, 1998.0], [81.7, 1998.0], [81.8, 1998.0], [81.9, 1998.0], [82.0, 1998.0], [82.1, 1998.0], [82.2, 1998.0], [82.3, 1998.0], [82.4, 1998.0], [82.5, 1998.0], [82.6, 1999.0], [82.7, 1999.0], [82.8, 1999.0], [82.9, 1999.0], [83.0, 1999.0], [83.1, 1999.0], [83.2, 1999.0], [83.3, 1999.0], [83.4, 1999.0], [83.5, 1999.0], [83.6, 2000.0], [83.7, 2000.0], [83.8, 2000.0], [83.9, 2000.0], [84.0, 2000.0], [84.1, 2000.0], [84.2, 2000.0], [84.3, 2001.0], [84.4, 2001.0], [84.5, 2001.0], [84.6, 2001.0], [84.7, 2001.0], [84.8, 2001.0], [84.9, 2001.0], [85.0, 2002.0], [85.1, 2002.0], [85.2, 2002.0], [85.3, 2002.0], [85.4, 2002.0], [85.5, 2003.0], [85.6, 2003.0], [85.7, 2003.0], [85.8, 2004.0], [85.9, 2004.0], [86.0, 2004.0], [86.1, 2004.0], [86.2, 2004.0], [86.3, 2004.0], [86.4, 2005.0], [86.5, 2005.0], [86.6, 2005.0], [86.7, 2005.0], [86.8, 2005.0], [86.9, 2005.0], [87.0, 2005.0], [87.1, 2006.0], [87.2, 2006.0], [87.3, 2006.0], [87.4, 2007.0], [87.5, 2008.0], [87.6, 2009.0], [87.7, 2010.0], [87.8, 2010.0], [87.9, 2090.0], [88.0, 2091.0], [88.1, 2092.0], [88.2, 2092.0], [88.3, 2093.0], [88.4, 2093.0], [88.5, 2094.0], [88.6, 2094.0], [88.7, 2094.0], [88.8, 2094.0], [88.9, 2095.0], [89.0, 2095.0], [89.1, 2096.0], [89.2, 2096.0], [89.3, 2096.0], [89.4, 2096.0], [89.5, 2096.0], [89.6, 2096.0], [89.7, 2096.0], [89.8, 2097.0], [89.9, 2097.0], [90.0, 2097.0], [90.1, 2097.0], [90.2, 2098.0], [90.3, 2098.0], [90.4, 2098.0], [90.5, 2098.0], [90.6, 2099.0], [90.7, 2099.0], [90.8, 2099.0], [90.9, 2099.0], [91.0, 2100.0], [91.1, 2100.0], [91.2, 2100.0], [91.3, 2101.0], [91.4, 2101.0], [91.5, 2101.0], [91.6, 2101.0], [91.7, 2102.0], [91.8, 2103.0], [91.9, 2103.0], [92.0, 2105.0], [92.1, 2105.0], [92.2, 2105.0], [92.3, 2106.0], [92.4, 2108.0], [92.5, 2113.0], [92.6, 2194.0], [92.7, 2196.0], [92.8, 2197.0], [92.9, 2197.0], [93.0, 2198.0], [93.1, 2198.0], [93.2, 2198.0], [93.3, 2198.0], [93.4, 2199.0], [93.5, 2199.0], [93.6, 2200.0], [93.7, 2200.0], [93.8, 2201.0], [93.9, 2201.0], [94.0, 2202.0], [94.1, 2202.0], [94.2, 2203.0], [94.3, 2205.0], [94.4, 2288.0], [94.5, 2290.0], [94.6, 2291.0], [94.7, 2293.0], [94.8, 2294.0], [94.9, 2295.0], [95.0, 2297.0], [95.1, 2298.0], [95.2, 2298.0], [95.3, 2299.0], [95.4, 2300.0], [95.5, 2301.0], [95.6, 2301.0], [95.7, 2301.0], [95.8, 2302.0], [95.9, 2303.0], [96.0, 2304.0], [96.1, 2304.0], [96.2, 2392.0], [96.3, 2397.0], [96.4, 2397.0], [96.5, 2397.0], [96.6, 2398.0], [96.7, 2399.0], [96.8, 2399.0], [96.9, 2399.0], [97.0, 2400.0], [97.1, 2400.0], [97.2, 2401.0], [97.3, 2401.0], [97.4, 2401.0], [97.5, 2404.0], [97.6, 2405.0], [97.7, 2405.0], [97.8, 2406.0], [97.9, 2406.0], [98.0, 2489.0], [98.1, 2489.0], [98.2, 2493.0], [98.3, 2494.0], [98.4, 2495.0], [98.5, 2495.0], [98.6, 2495.0], [98.7, 2496.0], [98.8, 2497.0], [98.9, 2498.0], [99.0, 2499.0], [99.1, 2499.0], [99.2, 2500.0], [99.3, 2501.0], [99.4, 2503.0], [99.5, 2504.0], [99.6, 2506.0], [99.7, 2594.0], [99.8, 2598.0], [99.9, 2601.0], [100.0, 2689.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 219.0, "series": [{"data": [[0.0, 38.0], [600.0, 6.0], [700.0, 13.0], [800.0, 46.0], [900.0, 51.0], [1000.0, 20.0], [1100.0, 59.0], [1200.0, 65.0], [1300.0, 75.0], [1400.0, 114.0], [1500.0, 167.0], [100.0, 6.0], [1600.0, 182.0], [1700.0, 207.0], [1800.0, 219.0], [1900.0, 200.0], [2000.0, 133.0], [2100.0, 47.0], [2200.0, 33.0], [2300.0, 28.0], [2400.0, 39.0], [2500.0, 13.0], [2600.0, 3.0], [200.0, 4.0], [300.0, 24.0], [400.0, 1.0], [500.0, 5.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 73.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1255.0, "series": [{"data": [[0.0, 73.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 470.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1255.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 42.16192170818503, "minX": 1.55960544E12, "maxY": 49.01294498381878, "series": [{"data": [[1.5596055E12, 49.01294498381878], [1.55960544E12, 42.16192170818503]], "isOverall": false, "label": "Call isPrime\/ with 2147483647 TG", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5596055E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 211.0, "minX": 2.0, "maxY": 1730.509481668774, "series": [{"data": [[2.0, 221.07142857142856], [3.0, 249.85714285714286], [4.0, 251.42857142857144], [5.0, 236.25], [6.0, 211.0], [7.0, 1500.0], [8.0, 430.16666666666663], [9.0, 923.5], [10.0, 745.3333333333333], [11.0, 517.0], [12.0, 924.0], [13.0, 736.0], [14.0, 454.8888888888889], [15.0, 924.0], [16.0, 610.75], [17.0, 568.2], [18.0, 997.0], [19.0, 1601.0], [20.0, 763.0], [21.0, 947.0], [22.0, 864.0], [23.0, 986.6666666666667], [24.0, 1004.0], [25.0, 1603.0], [26.0, 894.0], [27.0, 1198.1666666666667], [28.0, 1007.0], [29.0, 1076.75], [30.0, 1322.5], [31.0, 1071.8333333333333], [32.0, 1375.0], [33.0, 991.1111111111111], [34.0, 1083.6666666666667], [35.0, 1163.3333333333333], [36.0, 1211.6666666666667], [37.0, 1043.1666666666667], [38.0, 964.1428571428571], [39.0, 1039.5], [40.0, 1248.0], [41.0, 945.0], [42.0, 1252.2], [43.0, 1233.0], [44.0, 1208.6], [45.0, 1333.3333333333333], [46.0, 1152.0], [47.0, 1499.6666666666667], [48.0, 1279.25], [49.0, 1213.7000000000003], [50.0, 1730.509481668774]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}, {"data": [[46.87096774193548, 1621.7641824249172]], "isOverall": false, "label": "Call isPrime\/2147483647-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1283.2333333333333, "minX": 1.55960544E12, "maxY": 3563.8, "series": [{"data": [[1.5596055E12, 3563.8], [1.55960544E12, 1620.4333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5596055E12, 2822.2], [1.55960544E12, 1283.2333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5596055E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1466.8185053380787, "minX": 1.55960544E12, "maxY": 1692.2168284789655, "series": [{"data": [[1.5596055E12, 1692.2168284789655], [1.55960544E12, 1466.8185053380787]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5596055E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1466.654804270464, "minX": 1.55960544E12, "maxY": 1692.131067961167, "series": [{"data": [[1.5596055E12, 1692.131067961167], [1.55960544E12, 1466.654804270464]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5596055E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.3932038834951457, "minX": 1.55960544E12, "maxY": 0.7508896797153025, "series": [{"data": [[1.5596055E12, 0.3932038834951457], [1.55960544E12, 0.7508896797153025]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5596055E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.55960544E12, "maxY": 2689.0, "series": [{"data": [[1.5596055E12, 2689.0], [1.55960544E12, 2601.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5596055E12, 798.0], [1.55960544E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5596055E12, 2010.0], [1.55960544E12, 2301.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5596055E12, 2403.5199999999995], [1.55960544E12, 2538.1900000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5596055E12, 2101.1499999999996], [1.55960544E12, 2406.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5596055E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 28.0, "minX": 16.0, "maxY": 2301.0, "series": [{"data": [[33.0, 1805.0], [35.0, 1709.0], [37.0, 1305.5], [38.0, 1701.0], [40.0, 1298.5], [45.0, 28.0], [57.0, 988.0], [16.0, 2098.5], [17.0, 2301.0], [18.0, 1848.0], [19.0, 2201.0], [20.0, 1997.5], [21.0, 1603.0], [23.0, 1652.5], [24.0, 1647.0], [25.0, 1799.0], [26.0, 1898.5], [27.0, 1896.0], [28.0, 1693.0], [29.0, 1894.0], [30.0, 1702.5], [31.0, 1604.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 28.0, "minX": 16.0, "maxY": 2301.0, "series": [{"data": [[33.0, 1805.0], [35.0, 1709.0], [37.0, 1305.5], [38.0, 1701.0], [40.0, 1298.5], [45.0, 28.0], [57.0, 988.0], [16.0, 2098.5], [17.0, 2301.0], [18.0, 1848.0], [19.0, 2201.0], [20.0, 1997.5], [21.0, 1603.0], [23.0, 1652.0], [24.0, 1647.0], [25.0, 1799.0], [26.0, 1898.0], [27.0, 1896.0], [28.0, 1693.0], [29.0, 1894.0], [30.0, 1702.5], [31.0, 1604.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.2, "minX": 1.55960544E12, "maxY": 19.766666666666666, "series": [{"data": [[1.5596055E12, 19.766666666666666], [1.55960544E12, 10.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5596055E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.366666666666667, "minX": 1.55960544E12, "maxY": 20.6, "series": [{"data": [[1.5596055E12, 20.6], [1.55960544E12, 9.366666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5596055E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.366666666666667, "minX": 1.55960544E12, "maxY": 20.6, "series": [{"data": [[1.5596055E12, 20.6], [1.55960544E12, 9.366666666666667]], "isOverall": false, "label": "Call isPrime\/2147483647-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5596055E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.366666666666667, "minX": 1.55960544E12, "maxY": 20.6, "series": [{"data": [[1.5596055E12, 20.6], [1.55960544E12, 9.366666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5596055E12, "title": "Total Transactions Per Second"}},
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

