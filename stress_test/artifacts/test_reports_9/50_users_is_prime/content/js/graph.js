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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 2705.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 3.0], [0.3, 3.0], [0.4, 3.0], [0.5, 4.0], [0.6, 4.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 10.0], [1.1, 11.0], [1.2, 36.0], [1.3, 40.0], [1.4, 90.0], [1.5, 92.0], [1.6, 93.0], [1.7, 95.0], [1.8, 95.0], [1.9, 96.0], [2.0, 97.0], [2.1, 200.0], [2.2, 235.0], [2.3, 240.0], [2.4, 296.0], [2.5, 298.0], [2.6, 298.0], [2.7, 299.0], [2.8, 300.0], [2.9, 300.0], [3.0, 302.0], [3.1, 302.0], [3.2, 303.0], [3.3, 304.0], [3.4, 307.0], [3.5, 310.0], [3.6, 331.0], [3.7, 333.0], [3.8, 336.0], [3.9, 339.0], [4.0, 340.0], [4.1, 393.0], [4.2, 394.0], [4.3, 396.0], [4.4, 397.0], [4.5, 400.0], [4.6, 402.0], [4.7, 402.0], [4.8, 407.0], [4.9, 434.0], [5.0, 444.0], [5.1, 491.0], [5.2, 492.0], [5.3, 493.0], [5.4, 497.0], [5.5, 499.0], [5.6, 501.0], [5.7, 502.0], [5.8, 507.0], [5.9, 531.0], [6.0, 595.0], [6.1, 598.0], [6.2, 599.0], [6.3, 600.0], [6.4, 601.0], [6.5, 602.0], [6.6, 603.0], [6.7, 612.0], [6.8, 638.0], [6.9, 641.0], [7.0, 694.0], [7.1, 697.0], [7.2, 697.0], [7.3, 701.0], [7.4, 703.0], [7.5, 706.0], [7.6, 709.0], [7.7, 735.0], [7.8, 795.0], [7.9, 796.0], [8.0, 798.0], [8.1, 801.0], [8.2, 838.0], [8.3, 890.0], [8.4, 894.0], [8.5, 896.0], [8.6, 896.0], [8.7, 897.0], [8.8, 899.0], [8.9, 900.0], [9.0, 900.0], [9.1, 901.0], [9.2, 905.0], [9.3, 935.0], [9.4, 935.0], [9.5, 945.0], [9.6, 995.0], [9.7, 997.0], [9.8, 1001.0], [9.9, 1001.0], [10.0, 1002.0], [10.1, 1003.0], [10.2, 1004.0], [10.3, 1032.0], [10.4, 1040.0], [10.5, 1095.0], [10.6, 1098.0], [10.7, 1099.0], [10.8, 1099.0], [10.9, 1099.0], [11.0, 1100.0], [11.1, 1101.0], [11.2, 1103.0], [11.3, 1104.0], [11.4, 1105.0], [11.5, 1106.0], [11.6, 1111.0], [11.7, 1143.0], [11.8, 1193.0], [11.9, 1194.0], [12.0, 1194.0], [12.1, 1195.0], [12.2, 1196.0], [12.3, 1197.0], [12.4, 1198.0], [12.5, 1198.0], [12.6, 1198.0], [12.7, 1199.0], [12.8, 1199.0], [12.9, 1199.0], [13.0, 1200.0], [13.1, 1201.0], [13.2, 1201.0], [13.3, 1202.0], [13.4, 1203.0], [13.5, 1204.0], [13.6, 1205.0], [13.7, 1205.0], [13.8, 1205.0], [13.9, 1207.0], [14.0, 1208.0], [14.1, 1232.0], [14.2, 1291.0], [14.3, 1292.0], [14.4, 1293.0], [14.5, 1293.0], [14.6, 1294.0], [14.7, 1294.0], [14.8, 1295.0], [14.9, 1296.0], [15.0, 1296.0], [15.1, 1296.0], [15.2, 1297.0], [15.3, 1298.0], [15.4, 1298.0], [15.5, 1298.0], [15.6, 1298.0], [15.7, 1299.0], [15.8, 1299.0], [15.9, 1300.0], [16.0, 1300.0], [16.1, 1301.0], [16.2, 1301.0], [16.3, 1301.0], [16.4, 1301.0], [16.5, 1302.0], [16.6, 1302.0], [16.7, 1303.0], [16.8, 1303.0], [16.9, 1303.0], [17.0, 1304.0], [17.1, 1305.0], [17.2, 1306.0], [17.3, 1307.0], [17.4, 1307.0], [17.5, 1308.0], [17.6, 1308.0], [17.7, 1313.0], [17.8, 1392.0], [17.9, 1394.0], [18.0, 1395.0], [18.1, 1396.0], [18.2, 1396.0], [18.3, 1396.0], [18.4, 1397.0], [18.5, 1397.0], [18.6, 1398.0], [18.7, 1399.0], [18.8, 1399.0], [18.9, 1400.0], [19.0, 1400.0], [19.1, 1400.0], [19.2, 1400.0], [19.3, 1400.0], [19.4, 1400.0], [19.5, 1401.0], [19.6, 1401.0], [19.7, 1402.0], [19.8, 1402.0], [19.9, 1402.0], [20.0, 1403.0], [20.1, 1403.0], [20.2, 1403.0], [20.3, 1403.0], [20.4, 1404.0], [20.5, 1404.0], [20.6, 1404.0], [20.7, 1405.0], [20.8, 1405.0], [20.9, 1405.0], [21.0, 1406.0], [21.1, 1406.0], [21.2, 1406.0], [21.3, 1407.0], [21.4, 1409.0], [21.5, 1429.0], [21.6, 1433.0], [21.7, 1438.0], [21.8, 1440.0], [21.9, 1441.0], [22.0, 1490.0], [22.1, 1491.0], [22.2, 1491.0], [22.3, 1492.0], [22.4, 1493.0], [22.5, 1493.0], [22.6, 1493.0], [22.7, 1494.0], [22.8, 1494.0], [22.9, 1494.0], [23.0, 1495.0], [23.1, 1496.0], [23.2, 1496.0], [23.3, 1496.0], [23.4, 1496.0], [23.5, 1497.0], [23.6, 1497.0], [23.7, 1497.0], [23.8, 1497.0], [23.9, 1497.0], [24.0, 1498.0], [24.1, 1498.0], [24.2, 1498.0], [24.3, 1499.0], [24.4, 1499.0], [24.5, 1499.0], [24.6, 1499.0], [24.7, 1500.0], [24.8, 1500.0], [24.9, 1500.0], [25.0, 1500.0], [25.1, 1500.0], [25.2, 1500.0], [25.3, 1501.0], [25.4, 1501.0], [25.5, 1501.0], [25.6, 1501.0], [25.7, 1501.0], [25.8, 1502.0], [25.9, 1502.0], [26.0, 1502.0], [26.1, 1502.0], [26.2, 1502.0], [26.3, 1503.0], [26.4, 1503.0], [26.5, 1503.0], [26.6, 1503.0], [26.7, 1504.0], [26.8, 1504.0], [26.9, 1504.0], [27.0, 1505.0], [27.1, 1505.0], [27.2, 1505.0], [27.3, 1506.0], [27.4, 1506.0], [27.5, 1506.0], [27.6, 1506.0], [27.7, 1506.0], [27.8, 1507.0], [27.9, 1508.0], [28.0, 1508.0], [28.1, 1509.0], [28.2, 1510.0], [28.3, 1534.0], [28.4, 1537.0], [28.5, 1591.0], [28.6, 1594.0], [28.7, 1594.0], [28.8, 1594.0], [28.9, 1595.0], [29.0, 1596.0], [29.1, 1596.0], [29.2, 1596.0], [29.3, 1597.0], [29.4, 1597.0], [29.5, 1597.0], [29.6, 1597.0], [29.7, 1597.0], [29.8, 1597.0], [29.9, 1598.0], [30.0, 1598.0], [30.1, 1598.0], [30.2, 1598.0], [30.3, 1598.0], [30.4, 1599.0], [30.5, 1599.0], [30.6, 1599.0], [30.7, 1599.0], [30.8, 1599.0], [30.9, 1599.0], [31.0, 1599.0], [31.1, 1599.0], [31.2, 1599.0], [31.3, 1599.0], [31.4, 1599.0], [31.5, 1600.0], [31.6, 1600.0], [31.7, 1600.0], [31.8, 1600.0], [31.9, 1600.0], [32.0, 1600.0], [32.1, 1600.0], [32.2, 1600.0], [32.3, 1600.0], [32.4, 1600.0], [32.5, 1600.0], [32.6, 1600.0], [32.7, 1600.0], [32.8, 1600.0], [32.9, 1601.0], [33.0, 1601.0], [33.1, 1601.0], [33.2, 1601.0], [33.3, 1601.0], [33.4, 1601.0], [33.5, 1601.0], [33.6, 1602.0], [33.7, 1602.0], [33.8, 1602.0], [33.9, 1602.0], [34.0, 1602.0], [34.1, 1602.0], [34.2, 1602.0], [34.3, 1603.0], [34.4, 1603.0], [34.5, 1603.0], [34.6, 1604.0], [34.7, 1604.0], [34.8, 1604.0], [34.9, 1604.0], [35.0, 1604.0], [35.1, 1604.0], [35.2, 1604.0], [35.3, 1604.0], [35.4, 1605.0], [35.5, 1605.0], [35.6, 1605.0], [35.7, 1606.0], [35.8, 1606.0], [35.9, 1606.0], [36.0, 1606.0], [36.1, 1606.0], [36.2, 1607.0], [36.3, 1607.0], [36.4, 1607.0], [36.5, 1609.0], [36.6, 1611.0], [36.7, 1691.0], [36.8, 1692.0], [36.9, 1694.0], [37.0, 1694.0], [37.1, 1695.0], [37.2, 1695.0], [37.3, 1695.0], [37.4, 1696.0], [37.5, 1696.0], [37.6, 1696.0], [37.7, 1696.0], [37.8, 1697.0], [37.9, 1697.0], [38.0, 1697.0], [38.1, 1697.0], [38.2, 1697.0], [38.3, 1697.0], [38.4, 1697.0], [38.5, 1697.0], [38.6, 1698.0], [38.7, 1698.0], [38.8, 1698.0], [38.9, 1698.0], [39.0, 1698.0], [39.1, 1698.0], [39.2, 1698.0], [39.3, 1699.0], [39.4, 1699.0], [39.5, 1699.0], [39.6, 1700.0], [39.7, 1700.0], [39.8, 1700.0], [39.9, 1700.0], [40.0, 1700.0], [40.1, 1700.0], [40.2, 1700.0], [40.3, 1700.0], [40.4, 1700.0], [40.5, 1700.0], [40.6, 1700.0], [40.7, 1700.0], [40.8, 1700.0], [40.9, 1701.0], [41.0, 1701.0], [41.1, 1701.0], [41.2, 1701.0], [41.3, 1701.0], [41.4, 1701.0], [41.5, 1701.0], [41.6, 1701.0], [41.7, 1701.0], [41.8, 1702.0], [41.9, 1702.0], [42.0, 1702.0], [42.1, 1702.0], [42.2, 1702.0], [42.3, 1703.0], [42.4, 1703.0], [42.5, 1703.0], [42.6, 1703.0], [42.7, 1703.0], [42.8, 1703.0], [42.9, 1703.0], [43.0, 1704.0], [43.1, 1704.0], [43.2, 1704.0], [43.3, 1704.0], [43.4, 1704.0], [43.5, 1704.0], [43.6, 1704.0], [43.7, 1705.0], [43.8, 1705.0], [43.9, 1705.0], [44.0, 1706.0], [44.1, 1706.0], [44.2, 1706.0], [44.3, 1707.0], [44.4, 1707.0], [44.5, 1707.0], [44.6, 1708.0], [44.7, 1710.0], [44.8, 1789.0], [44.9, 1790.0], [45.0, 1790.0], [45.1, 1791.0], [45.2, 1792.0], [45.3, 1793.0], [45.4, 1793.0], [45.5, 1793.0], [45.6, 1793.0], [45.7, 1794.0], [45.8, 1794.0], [45.9, 1794.0], [46.0, 1794.0], [46.1, 1795.0], [46.2, 1795.0], [46.3, 1795.0], [46.4, 1795.0], [46.5, 1796.0], [46.6, 1796.0], [46.7, 1796.0], [46.8, 1796.0], [46.9, 1796.0], [47.0, 1796.0], [47.1, 1796.0], [47.2, 1796.0], [47.3, 1796.0], [47.4, 1797.0], [47.5, 1797.0], [47.6, 1797.0], [47.7, 1797.0], [47.8, 1797.0], [47.9, 1797.0], [48.0, 1797.0], [48.1, 1797.0], [48.2, 1797.0], [48.3, 1798.0], [48.4, 1798.0], [48.5, 1798.0], [48.6, 1798.0], [48.7, 1798.0], [48.8, 1798.0], [48.9, 1798.0], [49.0, 1799.0], [49.1, 1799.0], [49.2, 1799.0], [49.3, 1799.0], [49.4, 1799.0], [49.5, 1799.0], [49.6, 1799.0], [49.7, 1799.0], [49.8, 1799.0], [49.9, 1799.0], [50.0, 1799.0], [50.1, 1800.0], [50.2, 1800.0], [50.3, 1800.0], [50.4, 1800.0], [50.5, 1800.0], [50.6, 1800.0], [50.7, 1801.0], [50.8, 1801.0], [50.9, 1801.0], [51.0, 1801.0], [51.1, 1801.0], [51.2, 1801.0], [51.3, 1801.0], [51.4, 1802.0], [51.5, 1802.0], [51.6, 1802.0], [51.7, 1802.0], [51.8, 1802.0], [51.9, 1802.0], [52.0, 1803.0], [52.1, 1803.0], [52.2, 1803.0], [52.3, 1803.0], [52.4, 1803.0], [52.5, 1803.0], [52.6, 1803.0], [52.7, 1803.0], [52.8, 1803.0], [52.9, 1803.0], [53.0, 1803.0], [53.1, 1804.0], [53.2, 1804.0], [53.3, 1804.0], [53.4, 1805.0], [53.5, 1805.0], [53.6, 1805.0], [53.7, 1805.0], [53.8, 1806.0], [53.9, 1806.0], [54.0, 1807.0], [54.1, 1807.0], [54.2, 1808.0], [54.3, 1808.0], [54.4, 1809.0], [54.5, 1811.0], [54.6, 1812.0], [54.7, 1833.0], [54.8, 1890.0], [54.9, 1890.0], [55.0, 1890.0], [55.1, 1891.0], [55.2, 1892.0], [55.3, 1892.0], [55.4, 1892.0], [55.5, 1892.0], [55.6, 1893.0], [55.7, 1893.0], [55.8, 1893.0], [55.9, 1893.0], [56.0, 1893.0], [56.1, 1893.0], [56.2, 1894.0], [56.3, 1894.0], [56.4, 1894.0], [56.5, 1895.0], [56.6, 1895.0], [56.7, 1895.0], [56.8, 1895.0], [56.9, 1895.0], [57.0, 1895.0], [57.1, 1895.0], [57.2, 1895.0], [57.3, 1896.0], [57.4, 1896.0], [57.5, 1896.0], [57.6, 1896.0], [57.7, 1896.0], [57.8, 1896.0], [57.9, 1896.0], [58.0, 1897.0], [58.1, 1897.0], [58.2, 1897.0], [58.3, 1897.0], [58.4, 1897.0], [58.5, 1897.0], [58.6, 1898.0], [58.7, 1898.0], [58.8, 1898.0], [58.9, 1898.0], [59.0, 1898.0], [59.1, 1898.0], [59.2, 1898.0], [59.3, 1898.0], [59.4, 1899.0], [59.5, 1899.0], [59.6, 1899.0], [59.7, 1899.0], [59.8, 1899.0], [59.9, 1899.0], [60.0, 1899.0], [60.1, 1899.0], [60.2, 1899.0], [60.3, 1900.0], [60.4, 1900.0], [60.5, 1900.0], [60.6, 1900.0], [60.7, 1900.0], [60.8, 1900.0], [60.9, 1900.0], [61.0, 1900.0], [61.1, 1900.0], [61.2, 1900.0], [61.3, 1900.0], [61.4, 1900.0], [61.5, 1901.0], [61.6, 1901.0], [61.7, 1901.0], [61.8, 1901.0], [61.9, 1901.0], [62.0, 1901.0], [62.1, 1901.0], [62.2, 1901.0], [62.3, 1901.0], [62.4, 1901.0], [62.5, 1901.0], [62.6, 1901.0], [62.7, 1902.0], [62.8, 1902.0], [62.9, 1902.0], [63.0, 1902.0], [63.1, 1902.0], [63.2, 1902.0], [63.3, 1902.0], [63.4, 1903.0], [63.5, 1903.0], [63.6, 1903.0], [63.7, 1903.0], [63.8, 1904.0], [63.9, 1904.0], [64.0, 1904.0], [64.1, 1904.0], [64.2, 1904.0], [64.3, 1904.0], [64.4, 1905.0], [64.5, 1905.0], [64.6, 1905.0], [64.7, 1905.0], [64.8, 1906.0], [64.9, 1906.0], [65.0, 1906.0], [65.1, 1907.0], [65.2, 1908.0], [65.3, 1908.0], [65.4, 1909.0], [65.5, 1987.0], [65.6, 1987.0], [65.7, 1989.0], [65.8, 1990.0], [65.9, 1991.0], [66.0, 1992.0], [66.1, 1992.0], [66.2, 1993.0], [66.3, 1994.0], [66.4, 1994.0], [66.5, 1994.0], [66.6, 1994.0], [66.7, 1994.0], [66.8, 1994.0], [66.9, 1995.0], [67.0, 1995.0], [67.1, 1995.0], [67.2, 1995.0], [67.3, 1995.0], [67.4, 1995.0], [67.5, 1996.0], [67.6, 1996.0], [67.7, 1996.0], [67.8, 1996.0], [67.9, 1996.0], [68.0, 1996.0], [68.1, 1997.0], [68.2, 1997.0], [68.3, 1997.0], [68.4, 1997.0], [68.5, 1997.0], [68.6, 1997.0], [68.7, 1997.0], [68.8, 1997.0], [68.9, 1997.0], [69.0, 1998.0], [69.1, 1998.0], [69.2, 1998.0], [69.3, 1998.0], [69.4, 1998.0], [69.5, 1998.0], [69.6, 1998.0], [69.7, 1999.0], [69.8, 1999.0], [69.9, 1999.0], [70.0, 1999.0], [70.1, 1999.0], [70.2, 1999.0], [70.3, 1999.0], [70.4, 1999.0], [70.5, 1999.0], [70.6, 1999.0], [70.7, 1999.0], [70.8, 2000.0], [70.9, 2000.0], [71.0, 2000.0], [71.1, 2000.0], [71.2, 2000.0], [71.3, 2000.0], [71.4, 2000.0], [71.5, 2000.0], [71.6, 2000.0], [71.7, 2000.0], [71.8, 2000.0], [71.9, 2000.0], [72.0, 2001.0], [72.1, 2001.0], [72.2, 2001.0], [72.3, 2001.0], [72.4, 2001.0], [72.5, 2001.0], [72.6, 2001.0], [72.7, 2001.0], [72.8, 2001.0], [72.9, 2001.0], [73.0, 2001.0], [73.1, 2002.0], [73.2, 2002.0], [73.3, 2002.0], [73.4, 2002.0], [73.5, 2002.0], [73.6, 2002.0], [73.7, 2002.0], [73.8, 2002.0], [73.9, 2003.0], [74.0, 2003.0], [74.1, 2003.0], [74.2, 2003.0], [74.3, 2003.0], [74.4, 2003.0], [74.5, 2003.0], [74.6, 2003.0], [74.7, 2004.0], [74.8, 2004.0], [74.9, 2004.0], [75.0, 2004.0], [75.1, 2004.0], [75.2, 2004.0], [75.3, 2004.0], [75.4, 2004.0], [75.5, 2004.0], [75.6, 2005.0], [75.7, 2005.0], [75.8, 2005.0], [75.9, 2005.0], [76.0, 2005.0], [76.1, 2006.0], [76.2, 2006.0], [76.3, 2006.0], [76.4, 2006.0], [76.5, 2006.0], [76.6, 2006.0], [76.7, 2007.0], [76.8, 2010.0], [76.9, 2013.0], [77.0, 2086.0], [77.1, 2087.0], [77.2, 2089.0], [77.3, 2092.0], [77.4, 2093.0], [77.5, 2093.0], [77.6, 2093.0], [77.7, 2094.0], [77.8, 2094.0], [77.9, 2094.0], [78.0, 2095.0], [78.1, 2095.0], [78.2, 2095.0], [78.3, 2095.0], [78.4, 2095.0], [78.5, 2096.0], [78.6, 2096.0], [78.7, 2096.0], [78.8, 2096.0], [78.9, 2096.0], [79.0, 2096.0], [79.1, 2096.0], [79.2, 2096.0], [79.3, 2096.0], [79.4, 2097.0], [79.5, 2097.0], [79.6, 2097.0], [79.7, 2097.0], [79.8, 2097.0], [79.9, 2097.0], [80.0, 2097.0], [80.1, 2097.0], [80.2, 2097.0], [80.3, 2097.0], [80.4, 2097.0], [80.5, 2098.0], [80.6, 2098.0], [80.7, 2098.0], [80.8, 2098.0], [80.9, 2098.0], [81.0, 2098.0], [81.1, 2099.0], [81.2, 2099.0], [81.3, 2099.0], [81.4, 2099.0], [81.5, 2099.0], [81.6, 2099.0], [81.7, 2099.0], [81.8, 2100.0], [81.9, 2100.0], [82.0, 2100.0], [82.1, 2100.0], [82.2, 2100.0], [82.3, 2100.0], [82.4, 2100.0], [82.5, 2101.0], [82.6, 2101.0], [82.7, 2101.0], [82.8, 2101.0], [82.9, 2102.0], [83.0, 2102.0], [83.1, 2102.0], [83.2, 2102.0], [83.3, 2102.0], [83.4, 2102.0], [83.5, 2103.0], [83.6, 2103.0], [83.7, 2103.0], [83.8, 2103.0], [83.9, 2103.0], [84.0, 2104.0], [84.1, 2104.0], [84.2, 2104.0], [84.3, 2104.0], [84.4, 2105.0], [84.5, 2105.0], [84.6, 2105.0], [84.7, 2105.0], [84.8, 2106.0], [84.9, 2106.0], [85.0, 2106.0], [85.1, 2107.0], [85.2, 2107.0], [85.3, 2186.0], [85.4, 2187.0], [85.5, 2191.0], [85.6, 2192.0], [85.7, 2193.0], [85.8, 2193.0], [85.9, 2194.0], [86.0, 2194.0], [86.1, 2195.0], [86.2, 2195.0], [86.3, 2195.0], [86.4, 2195.0], [86.5, 2196.0], [86.6, 2196.0], [86.7, 2196.0], [86.8, 2196.0], [86.9, 2197.0], [87.0, 2197.0], [87.1, 2197.0], [87.2, 2197.0], [87.3, 2198.0], [87.4, 2198.0], [87.5, 2198.0], [87.6, 2199.0], [87.7, 2199.0], [87.8, 2199.0], [87.9, 2199.0], [88.0, 2199.0], [88.1, 2199.0], [88.2, 2199.0], [88.3, 2200.0], [88.4, 2200.0], [88.5, 2201.0], [88.6, 2201.0], [88.7, 2201.0], [88.8, 2201.0], [88.9, 2201.0], [89.0, 2201.0], [89.1, 2202.0], [89.2, 2202.0], [89.3, 2203.0], [89.4, 2203.0], [89.5, 2203.0], [89.6, 2203.0], [89.7, 2203.0], [89.8, 2204.0], [89.9, 2204.0], [90.0, 2204.0], [90.1, 2204.0], [90.2, 2204.0], [90.3, 2204.0], [90.4, 2205.0], [90.5, 2206.0], [90.6, 2208.0], [90.7, 2228.0], [90.8, 2295.0], [90.9, 2295.0], [91.0, 2296.0], [91.1, 2296.0], [91.2, 2296.0], [91.3, 2296.0], [91.4, 2297.0], [91.5, 2297.0], [91.6, 2297.0], [91.7, 2297.0], [91.8, 2297.0], [91.9, 2298.0], [92.0, 2298.0], [92.1, 2298.0], [92.2, 2298.0], [92.3, 2298.0], [92.4, 2298.0], [92.5, 2298.0], [92.6, 2299.0], [92.7, 2299.0], [92.8, 2300.0], [92.9, 2300.0], [93.0, 2300.0], [93.1, 2300.0], [93.2, 2301.0], [93.3, 2301.0], [93.4, 2301.0], [93.5, 2301.0], [93.6, 2301.0], [93.7, 2301.0], [93.8, 2302.0], [93.9, 2302.0], [94.0, 2302.0], [94.1, 2303.0], [94.2, 2304.0], [94.3, 2304.0], [94.4, 2305.0], [94.5, 2305.0], [94.6, 2310.0], [94.7, 2313.0], [94.8, 2393.0], [94.9, 2393.0], [95.0, 2394.0], [95.1, 2394.0], [95.2, 2394.0], [95.3, 2395.0], [95.4, 2396.0], [95.5, 2396.0], [95.6, 2396.0], [95.7, 2396.0], [95.8, 2397.0], [95.9, 2398.0], [96.0, 2398.0], [96.1, 2398.0], [96.2, 2398.0], [96.3, 2399.0], [96.4, 2399.0], [96.5, 2399.0], [96.6, 2400.0], [96.7, 2400.0], [96.8, 2400.0], [96.9, 2400.0], [97.0, 2401.0], [97.1, 2401.0], [97.2, 2402.0], [97.3, 2402.0], [97.4, 2403.0], [97.5, 2403.0], [97.6, 2405.0], [97.7, 2405.0], [97.8, 2406.0], [97.9, 2406.0], [98.0, 2490.0], [98.1, 2492.0], [98.2, 2492.0], [98.3, 2492.0], [98.4, 2494.0], [98.5, 2496.0], [98.6, 2496.0], [98.7, 2497.0], [98.8, 2498.0], [98.9, 2500.0], [99.0, 2500.0], [99.1, 2501.0], [99.2, 2501.0], [99.3, 2504.0], [99.4, 2593.0], [99.5, 2595.0], [99.6, 2597.0], [99.7, 2598.0], [99.8, 2607.0], [99.9, 2698.0], [100.0, 2705.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 189.0, "series": [{"data": [[0.0, 35.0], [600.0, 17.0], [700.0, 14.0], [800.0, 14.0], [900.0, 16.0], [1000.0, 21.0], [1100.0, 34.0], [1200.0, 50.0], [1300.0, 52.0], [1400.0, 99.0], [1500.0, 118.0], [100.0, 1.0], [1600.0, 139.0], [1700.0, 181.0], [1800.0, 175.0], [1900.0, 181.0], [2000.0, 189.0], [2100.0, 111.0], [2200.0, 79.0], [2300.0, 64.0], [2400.0, 41.0], [2500.0, 15.0], [2600.0, 3.0], [2700.0, 1.0], [200.0, 11.0], [300.0, 30.0], [400.0, 18.0], [500.0, 12.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 96.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1287.0, "series": [{"data": [[0.0, 96.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 338.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1287.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 37.87999999999999, "minX": 1.55960568E12, "maxY": 47.03084515731031, "series": [{"data": [[1.55960574E12, 37.87999999999999], [1.55960568E12, 47.03084515731031]], "isOverall": false, "label": "Call isPrime\/ with 2147483647 TG", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960574E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6.166666666666666, "minX": 1.0, "maxY": 2295.0, "series": [{"data": [[2.0, 6.166666666666666], [3.0, 517.0], [4.0, 48.57142857142857], [5.0, 278.25], [6.0, 456.4], [7.0, 1401.3333333333333], [8.0, 1904.0], [9.0, 565.8333333333334], [11.0, 1048.8], [12.0, 302.83333333333337], [13.0, 1168.25], [14.0, 279.0], [15.0, 643.4444444444445], [16.0, 845.6666666666666], [17.0, 841.6666666666666], [18.0, 556.0], [19.0, 653.0], [20.0, 897.6666666666667], [21.0, 1899.0], [22.0, 633.0], [23.0, 716.0], [24.0, 503.0], [25.0, 923.2857142857143], [26.0, 483.0], [27.0, 500.0], [28.0, 1264.8333333333335], [29.0, 997.25], [30.0, 2005.0], [31.0, 750.0999999999999], [32.0, 992.5], [33.0, 878.1666666666666], [34.0, 1024.5], [35.0, 1136.6666666666667], [36.0, 1368.5], [37.0, 1400.5], [38.0, 998.6666666666666], [39.0, 2295.0], [40.0, 1019.5555555555555], [41.0, 1054.25], [42.0, 1311.6666666666667], [43.0, 1167.1666666666665], [44.0, 1380.0], [45.0, 1256.2], [47.0, 1329.8], [46.0, 2202.0], [48.0, 1697.5], [49.0, 1098.3333333333333], [50.0, 1831.102478231749], [1.0, 1994.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}, {"data": [[46.49912841371301, 1696.7983730389328]], "isOverall": false, "label": "Call isPrime\/2147483647-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 228.33333333333334, "minX": 1.55960568E12, "maxY": 4673.883333333333, "series": [{"data": [[1.55960574E12, 288.3333333333333], [1.55960568E12, 4673.883333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55960574E12, 228.33333333333334], [1.55960568E12, 3701.2833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960574E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1665.032078963604, "minX": 1.55960568E12, "maxY": 2211.730000000002, "series": [{"data": [[1.55960574E12, 2211.730000000002], [1.55960568E12, 1665.032078963604]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960574E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1664.9049969154848, "minX": 1.55960568E12, "maxY": 2211.55, "series": [{"data": [[1.55960574E12, 2211.55], [1.55960568E12, 1664.9049969154848]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960574E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.38999999999999996, "minX": 1.55960568E12, "maxY": 0.4996915484268982, "series": [{"data": [[1.55960574E12, 0.38999999999999996], [1.55960568E12, 0.4996915484268982]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960574E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.55960568E12, "maxY": 2705.0, "series": [{"data": [[1.55960574E12, 2705.0], [1.55960568E12, 2598.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55960574E12, 1796.0], [1.55960568E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55960574E12, 2500.9], [1.55960568E12, 2198.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55960574E12, 2704.93], [1.55960568E12, 2490.7799999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55960574E12, 2598.9], [1.55960568E12, 2300.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960574E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 434.0, "minX": 8.0, "maxY": 2297.0, "series": [{"data": [[32.0, 2250.5], [8.0, 1904.5], [34.0, 1599.0], [36.0, 1705.5], [37.0, 1498.5], [39.0, 434.0], [41.0, 1396.0], [42.0, 1795.0], [47.0, 1201.0], [17.0, 2297.0], [18.0, 2202.0], [19.0, 1803.0], [20.0, 1500.5], [21.0, 1991.0], [22.0, 1902.0], [23.0, 1997.0], [24.0, 2000.0], [25.0, 1996.5], [26.0, 1997.5], [27.0, 1703.5], [28.0, 1694.5], [29.0, 1703.0], [30.0, 1203.0], [31.0, 1604.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 433.0, "minX": 8.0, "maxY": 2297.0, "series": [{"data": [[32.0, 2250.5], [8.0, 1903.5], [34.0, 1599.0], [36.0, 1705.5], [37.0, 1498.5], [39.0, 433.0], [41.0, 1396.0], [42.0, 1795.0], [47.0, 1201.0], [17.0, 2297.0], [18.0, 2201.5], [19.0, 1803.0], [20.0, 1500.0], [21.0, 1990.0], [22.0, 1902.0], [23.0, 1997.0], [24.0, 2000.0], [25.0, 1996.5], [26.0, 1997.0], [27.0, 1703.5], [28.0, 1694.0], [29.0, 1703.0], [30.0, 1203.0], [31.0, 1604.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 47.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.55960568E12, "maxY": 27.85, "series": [{"data": [[1.55960574E12, 0.8333333333333334], [1.55960568E12, 27.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960574E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55960568E12, "maxY": 27.016666666666666, "series": [{"data": [[1.55960574E12, 1.6666666666666667], [1.55960568E12, 27.016666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960574E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55960568E12, "maxY": 27.016666666666666, "series": [{"data": [[1.55960574E12, 1.6666666666666667], [1.55960568E12, 27.016666666666666]], "isOverall": false, "label": "Call isPrime\/2147483647-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960574E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.55960568E12, "maxY": 27.016666666666666, "series": [{"data": [[1.55960574E12, 1.6666666666666667], [1.55960568E12, 27.016666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960574E12, "title": "Total Transactions Per Second"}},
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

