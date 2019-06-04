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
        data: {"result": {"minY": 35.0, "minX": 0.0, "maxY": 3091.0, "series": [{"data": [[0.0, 35.0], [0.1, 36.0], [0.2, 42.0], [0.3, 117.0], [0.4, 127.0], [0.5, 127.0], [0.6, 129.0], [0.7, 133.0], [0.8, 136.0], [0.9, 196.0], [1.0, 198.0], [1.1, 198.0], [1.2, 201.0], [1.3, 209.0], [1.4, 227.0], [1.5, 286.0], [1.6, 293.0], [1.7, 296.0], [1.8, 296.0], [1.9, 373.0], [2.0, 389.0], [2.1, 394.0], [2.2, 492.0], [2.3, 493.0], [2.4, 501.0], [2.5, 520.0], [2.6, 526.0], [2.7, 690.0], [2.8, 701.0], [2.9, 703.0], [3.0, 705.0], [3.1, 706.0], [3.2, 795.0], [3.3, 796.0], [3.4, 796.0], [3.5, 796.0], [3.6, 798.0], [3.7, 799.0], [3.8, 799.0], [3.9, 807.0], [4.0, 819.0], [4.1, 894.0], [4.2, 895.0], [4.3, 895.0], [4.4, 897.0], [4.5, 898.0], [4.6, 899.0], [4.7, 900.0], [4.8, 900.0], [4.9, 901.0], [5.0, 902.0], [5.1, 902.0], [5.2, 902.0], [5.3, 909.0], [5.4, 989.0], [5.5, 991.0], [5.6, 993.0], [5.7, 995.0], [5.8, 997.0], [5.9, 1000.0], [6.0, 1000.0], [6.1, 1003.0], [6.2, 1003.0], [6.3, 1005.0], [6.4, 1005.0], [6.5, 1092.0], [6.6, 1095.0], [6.7, 1098.0], [6.8, 1098.0], [6.9, 1099.0], [7.0, 1099.0], [7.1, 1100.0], [7.2, 1100.0], [7.3, 1101.0], [7.4, 1101.0], [7.5, 1101.0], [7.6, 1101.0], [7.7, 1102.0], [7.8, 1104.0], [7.9, 1104.0], [8.0, 1105.0], [8.1, 1107.0], [8.2, 1195.0], [8.3, 1196.0], [8.4, 1198.0], [8.5, 1199.0], [8.6, 1199.0], [8.7, 1200.0], [8.8, 1200.0], [8.9, 1200.0], [9.0, 1200.0], [9.1, 1201.0], [9.2, 1201.0], [9.3, 1201.0], [9.4, 1202.0], [9.5, 1202.0], [9.6, 1202.0], [9.7, 1203.0], [9.8, 1203.0], [9.9, 1203.0], [10.0, 1203.0], [10.1, 1204.0], [10.2, 1205.0], [10.3, 1205.0], [10.4, 1205.0], [10.5, 1206.0], [10.6, 1294.0], [10.7, 1294.0], [10.8, 1294.0], [10.9, 1295.0], [11.0, 1296.0], [11.1, 1296.0], [11.2, 1296.0], [11.3, 1297.0], [11.4, 1298.0], [11.5, 1298.0], [11.6, 1299.0], [11.7, 1300.0], [11.8, 1301.0], [11.9, 1301.0], [12.0, 1302.0], [12.1, 1302.0], [12.2, 1302.0], [12.3, 1304.0], [12.4, 1304.0], [12.5, 1390.0], [12.6, 1391.0], [12.7, 1393.0], [12.8, 1394.0], [12.9, 1394.0], [13.0, 1395.0], [13.1, 1395.0], [13.2, 1396.0], [13.3, 1397.0], [13.4, 1397.0], [13.5, 1398.0], [13.6, 1398.0], [13.7, 1398.0], [13.8, 1398.0], [13.9, 1398.0], [14.0, 1398.0], [14.1, 1399.0], [14.2, 1399.0], [14.3, 1399.0], [14.4, 1400.0], [14.5, 1400.0], [14.6, 1400.0], [14.7, 1401.0], [14.8, 1401.0], [14.9, 1401.0], [15.0, 1402.0], [15.1, 1403.0], [15.2, 1404.0], [15.3, 1404.0], [15.4, 1406.0], [15.5, 1406.0], [15.6, 1407.0], [15.7, 1493.0], [15.8, 1494.0], [15.9, 1495.0], [16.0, 1495.0], [16.1, 1495.0], [16.2, 1497.0], [16.3, 1498.0], [16.4, 1498.0], [16.5, 1503.0], [16.6, 1503.0], [16.7, 1503.0], [16.8, 1504.0], [16.9, 1505.0], [17.0, 1505.0], [17.1, 1505.0], [17.2, 1506.0], [17.3, 1506.0], [17.4, 1591.0], [17.5, 1592.0], [17.6, 1594.0], [17.7, 1596.0], [17.8, 1596.0], [17.9, 1597.0], [18.0, 1597.0], [18.1, 1598.0], [18.2, 1598.0], [18.3, 1599.0], [18.4, 1599.0], [18.5, 1599.0], [18.6, 1601.0], [18.7, 1601.0], [18.8, 1601.0], [18.9, 1601.0], [19.0, 1602.0], [19.1, 1602.0], [19.2, 1603.0], [19.3, 1603.0], [19.4, 1604.0], [19.5, 1605.0], [19.6, 1607.0], [19.7, 1608.0], [19.8, 1615.0], [19.9, 1688.0], [20.0, 1690.0], [20.1, 1692.0], [20.2, 1696.0], [20.3, 1697.0], [20.4, 1697.0], [20.5, 1698.0], [20.6, 1698.0], [20.7, 1699.0], [20.8, 1699.0], [20.9, 1699.0], [21.0, 1700.0], [21.1, 1700.0], [21.2, 1700.0], [21.3, 1700.0], [21.4, 1701.0], [21.5, 1701.0], [21.6, 1701.0], [21.7, 1703.0], [21.8, 1703.0], [21.9, 1703.0], [22.0, 1704.0], [22.1, 1704.0], [22.2, 1705.0], [22.3, 1706.0], [22.4, 1707.0], [22.5, 1709.0], [22.6, 1792.0], [22.7, 1792.0], [22.8, 1793.0], [22.9, 1795.0], [23.0, 1795.0], [23.1, 1796.0], [23.2, 1796.0], [23.3, 1796.0], [23.4, 1796.0], [23.5, 1797.0], [23.6, 1797.0], [23.7, 1797.0], [23.8, 1798.0], [23.9, 1798.0], [24.0, 1799.0], [24.1, 1800.0], [24.2, 1800.0], [24.3, 1801.0], [24.4, 1801.0], [24.5, 1801.0], [24.6, 1805.0], [24.7, 1805.0], [24.8, 1808.0], [24.9, 1809.0], [25.0, 1886.0], [25.1, 1888.0], [25.2, 1890.0], [25.3, 1892.0], [25.4, 1892.0], [25.5, 1894.0], [25.6, 1895.0], [25.7, 1895.0], [25.8, 1896.0], [25.9, 1897.0], [26.0, 1898.0], [26.1, 1898.0], [26.2, 1898.0], [26.3, 1899.0], [26.4, 1899.0], [26.5, 1899.0], [26.6, 1899.0], [26.7, 1900.0], [26.8, 1900.0], [26.9, 1900.0], [27.0, 1900.0], [27.1, 1900.0], [27.2, 1901.0], [27.3, 1901.0], [27.4, 1901.0], [27.5, 1901.0], [27.6, 1901.0], [27.7, 1902.0], [27.8, 1902.0], [27.9, 1903.0], [28.0, 1903.0], [28.1, 1903.0], [28.2, 1904.0], [28.3, 1904.0], [28.4, 1905.0], [28.5, 1905.0], [28.6, 1905.0], [28.7, 1906.0], [28.8, 1906.0], [28.9, 1906.0], [29.0, 1991.0], [29.1, 1993.0], [29.2, 1994.0], [29.3, 1994.0], [29.4, 1994.0], [29.5, 1995.0], [29.6, 1996.0], [29.7, 1996.0], [29.8, 1996.0], [29.9, 1997.0], [30.0, 1997.0], [30.1, 1997.0], [30.2, 1997.0], [30.3, 1998.0], [30.4, 1998.0], [30.5, 1998.0], [30.6, 1999.0], [30.7, 1999.0], [30.8, 2000.0], [30.9, 2000.0], [31.0, 2000.0], [31.1, 2000.0], [31.2, 2000.0], [31.3, 2001.0], [31.4, 2002.0], [31.5, 2003.0], [31.6, 2003.0], [31.7, 2004.0], [31.8, 2004.0], [31.9, 2007.0], [32.0, 2008.0], [32.1, 2008.0], [32.2, 2008.0], [32.3, 2012.0], [32.4, 2090.0], [32.5, 2094.0], [32.6, 2095.0], [32.7, 2096.0], [32.8, 2096.0], [32.9, 2097.0], [33.0, 2098.0], [33.1, 2098.0], [33.2, 2098.0], [33.3, 2098.0], [33.4, 2098.0], [33.5, 2099.0], [33.6, 2099.0], [33.7, 2100.0], [33.8, 2100.0], [33.9, 2100.0], [34.0, 2100.0], [34.1, 2100.0], [34.2, 2100.0], [34.3, 2101.0], [34.4, 2101.0], [34.5, 2101.0], [34.6, 2101.0], [34.7, 2102.0], [34.8, 2102.0], [34.9, 2102.0], [35.0, 2102.0], [35.1, 2103.0], [35.2, 2103.0], [35.3, 2103.0], [35.4, 2103.0], [35.5, 2104.0], [35.6, 2104.0], [35.7, 2104.0], [35.8, 2104.0], [35.9, 2105.0], [36.0, 2105.0], [36.1, 2107.0], [36.2, 2184.0], [36.3, 2192.0], [36.4, 2193.0], [36.5, 2193.0], [36.6, 2194.0], [36.7, 2195.0], [36.8, 2195.0], [36.9, 2196.0], [37.0, 2196.0], [37.1, 2196.0], [37.2, 2196.0], [37.3, 2197.0], [37.4, 2197.0], [37.5, 2197.0], [37.6, 2197.0], [37.7, 2198.0], [37.8, 2198.0], [37.9, 2198.0], [38.0, 2198.0], [38.1, 2198.0], [38.2, 2198.0], [38.3, 2199.0], [38.4, 2199.0], [38.5, 2200.0], [38.6, 2200.0], [38.7, 2200.0], [38.8, 2200.0], [38.9, 2200.0], [39.0, 2200.0], [39.1, 2200.0], [39.2, 2200.0], [39.3, 2201.0], [39.4, 2201.0], [39.5, 2201.0], [39.6, 2201.0], [39.7, 2201.0], [39.8, 2201.0], [39.9, 2201.0], [40.0, 2201.0], [40.1, 2201.0], [40.2, 2201.0], [40.3, 2202.0], [40.4, 2202.0], [40.5, 2202.0], [40.6, 2202.0], [40.7, 2202.0], [40.8, 2202.0], [40.9, 2202.0], [41.0, 2202.0], [41.1, 2202.0], [41.2, 2203.0], [41.3, 2203.0], [41.4, 2203.0], [41.5, 2204.0], [41.6, 2204.0], [41.7, 2204.0], [41.8, 2204.0], [41.9, 2204.0], [42.0, 2204.0], [42.1, 2205.0], [42.2, 2206.0], [42.3, 2207.0], [42.4, 2210.0], [42.5, 2211.0], [42.6, 2285.0], [42.7, 2290.0], [42.8, 2292.0], [42.9, 2292.0], [43.0, 2293.0], [43.1, 2294.0], [43.2, 2294.0], [43.3, 2295.0], [43.4, 2295.0], [43.5, 2295.0], [43.6, 2295.0], [43.7, 2295.0], [43.8, 2296.0], [43.9, 2296.0], [44.0, 2296.0], [44.1, 2296.0], [44.2, 2296.0], [44.3, 2297.0], [44.4, 2297.0], [44.5, 2297.0], [44.6, 2297.0], [44.7, 2297.0], [44.8, 2297.0], [44.9, 2297.0], [45.0, 2298.0], [45.1, 2298.0], [45.2, 2298.0], [45.3, 2298.0], [45.4, 2298.0], [45.5, 2298.0], [45.6, 2298.0], [45.7, 2298.0], [45.8, 2298.0], [45.9, 2298.0], [46.0, 2299.0], [46.1, 2299.0], [46.2, 2299.0], [46.3, 2299.0], [46.4, 2300.0], [46.5, 2300.0], [46.6, 2300.0], [46.7, 2300.0], [46.8, 2300.0], [46.9, 2301.0], [47.0, 2301.0], [47.1, 2301.0], [47.2, 2301.0], [47.3, 2301.0], [47.4, 2301.0], [47.5, 2301.0], [47.6, 2301.0], [47.7, 2302.0], [47.8, 2302.0], [47.9, 2302.0], [48.0, 2302.0], [48.1, 2302.0], [48.2, 2302.0], [48.3, 2302.0], [48.4, 2303.0], [48.5, 2303.0], [48.6, 2303.0], [48.7, 2303.0], [48.8, 2304.0], [48.9, 2304.0], [49.0, 2304.0], [49.1, 2304.0], [49.2, 2304.0], [49.3, 2304.0], [49.4, 2305.0], [49.5, 2305.0], [49.6, 2306.0], [49.7, 2306.0], [49.8, 2306.0], [49.9, 2306.0], [50.0, 2307.0], [50.1, 2307.0], [50.2, 2307.0], [50.3, 2312.0], [50.4, 2314.0], [50.5, 2386.0], [50.6, 2387.0], [50.7, 2388.0], [50.8, 2389.0], [50.9, 2390.0], [51.0, 2391.0], [51.1, 2391.0], [51.2, 2391.0], [51.3, 2393.0], [51.4, 2393.0], [51.5, 2394.0], [51.6, 2394.0], [51.7, 2394.0], [51.8, 2394.0], [51.9, 2395.0], [52.0, 2395.0], [52.1, 2395.0], [52.2, 2395.0], [52.3, 2395.0], [52.4, 2395.0], [52.5, 2395.0], [52.6, 2396.0], [52.7, 2396.0], [52.8, 2396.0], [52.9, 2396.0], [53.0, 2396.0], [53.1, 2396.0], [53.2, 2396.0], [53.3, 2396.0], [53.4, 2397.0], [53.5, 2397.0], [53.6, 2397.0], [53.7, 2397.0], [53.8, 2397.0], [53.9, 2397.0], [54.0, 2397.0], [54.1, 2397.0], [54.2, 2398.0], [54.3, 2398.0], [54.4, 2398.0], [54.5, 2398.0], [54.6, 2398.0], [54.7, 2398.0], [54.8, 2398.0], [54.9, 2399.0], [55.0, 2399.0], [55.1, 2399.0], [55.2, 2399.0], [55.3, 2399.0], [55.4, 2399.0], [55.5, 2399.0], [55.6, 2399.0], [55.7, 2399.0], [55.8, 2400.0], [55.9, 2400.0], [56.0, 2400.0], [56.1, 2400.0], [56.2, 2400.0], [56.3, 2400.0], [56.4, 2400.0], [56.5, 2400.0], [56.6, 2400.0], [56.7, 2400.0], [56.8, 2401.0], [56.9, 2401.0], [57.0, 2401.0], [57.1, 2401.0], [57.2, 2401.0], [57.3, 2401.0], [57.4, 2401.0], [57.5, 2402.0], [57.6, 2402.0], [57.7, 2402.0], [57.8, 2402.0], [57.9, 2402.0], [58.0, 2402.0], [58.1, 2402.0], [58.2, 2402.0], [58.3, 2403.0], [58.4, 2403.0], [58.5, 2403.0], [58.6, 2403.0], [58.7, 2403.0], [58.8, 2403.0], [58.9, 2404.0], [59.0, 2404.0], [59.1, 2404.0], [59.2, 2404.0], [59.3, 2404.0], [59.4, 2404.0], [59.5, 2404.0], [59.6, 2405.0], [59.7, 2405.0], [59.8, 2405.0], [59.9, 2405.0], [60.0, 2406.0], [60.1, 2406.0], [60.2, 2406.0], [60.3, 2406.0], [60.4, 2410.0], [60.5, 2411.0], [60.6, 2483.0], [60.7, 2489.0], [60.8, 2491.0], [60.9, 2492.0], [61.0, 2492.0], [61.1, 2493.0], [61.2, 2493.0], [61.3, 2493.0], [61.4, 2493.0], [61.5, 2493.0], [61.6, 2494.0], [61.7, 2494.0], [61.8, 2494.0], [61.9, 2494.0], [62.0, 2494.0], [62.1, 2494.0], [62.2, 2494.0], [62.3, 2494.0], [62.4, 2495.0], [62.5, 2495.0], [62.6, 2495.0], [62.7, 2495.0], [62.8, 2495.0], [62.9, 2495.0], [63.0, 2496.0], [63.1, 2496.0], [63.2, 2496.0], [63.3, 2496.0], [63.4, 2496.0], [63.5, 2496.0], [63.6, 2496.0], [63.7, 2496.0], [63.8, 2497.0], [63.9, 2497.0], [64.0, 2497.0], [64.1, 2497.0], [64.2, 2497.0], [64.3, 2497.0], [64.4, 2497.0], [64.5, 2498.0], [64.6, 2498.0], [64.7, 2498.0], [64.8, 2498.0], [64.9, 2498.0], [65.0, 2498.0], [65.1, 2498.0], [65.2, 2498.0], [65.3, 2498.0], [65.4, 2498.0], [65.5, 2498.0], [65.6, 2498.0], [65.7, 2499.0], [65.8, 2499.0], [65.9, 2499.0], [66.0, 2499.0], [66.1, 2499.0], [66.2, 2499.0], [66.3, 2499.0], [66.4, 2499.0], [66.5, 2499.0], [66.6, 2499.0], [66.7, 2499.0], [66.8, 2499.0], [66.9, 2500.0], [67.0, 2500.0], [67.1, 2500.0], [67.2, 2500.0], [67.3, 2500.0], [67.4, 2500.0], [67.5, 2500.0], [67.6, 2501.0], [67.7, 2501.0], [67.8, 2501.0], [67.9, 2501.0], [68.0, 2501.0], [68.1, 2501.0], [68.2, 2501.0], [68.3, 2501.0], [68.4, 2501.0], [68.5, 2501.0], [68.6, 2502.0], [68.7, 2502.0], [68.8, 2502.0], [68.9, 2502.0], [69.0, 2502.0], [69.1, 2502.0], [69.2, 2502.0], [69.3, 2502.0], [69.4, 2502.0], [69.5, 2503.0], [69.6, 2503.0], [69.7, 2503.0], [69.8, 2503.0], [69.9, 2503.0], [70.0, 2503.0], [70.1, 2503.0], [70.2, 2503.0], [70.3, 2504.0], [70.4, 2504.0], [70.5, 2504.0], [70.6, 2504.0], [70.7, 2504.0], [70.8, 2504.0], [70.9, 2504.0], [71.0, 2505.0], [71.1, 2505.0], [71.2, 2505.0], [71.3, 2505.0], [71.4, 2506.0], [71.5, 2506.0], [71.6, 2507.0], [71.7, 2507.0], [71.8, 2508.0], [71.9, 2509.0], [72.0, 2510.0], [72.1, 2510.0], [72.2, 2512.0], [72.3, 2586.0], [72.4, 2590.0], [72.5, 2590.0], [72.6, 2591.0], [72.7, 2591.0], [72.8, 2591.0], [72.9, 2592.0], [73.0, 2592.0], [73.1, 2593.0], [73.2, 2593.0], [73.3, 2593.0], [73.4, 2594.0], [73.5, 2594.0], [73.6, 2594.0], [73.7, 2594.0], [73.8, 2594.0], [73.9, 2594.0], [74.0, 2594.0], [74.1, 2595.0], [74.2, 2595.0], [74.3, 2595.0], [74.4, 2595.0], [74.5, 2595.0], [74.6, 2595.0], [74.7, 2595.0], [74.8, 2596.0], [74.9, 2596.0], [75.0, 2596.0], [75.1, 2596.0], [75.2, 2596.0], [75.3, 2596.0], [75.4, 2597.0], [75.5, 2597.0], [75.6, 2597.0], [75.7, 2597.0], [75.8, 2598.0], [75.9, 2598.0], [76.0, 2598.0], [76.1, 2598.0], [76.2, 2598.0], [76.3, 2599.0], [76.4, 2599.0], [76.5, 2599.0], [76.6, 2599.0], [76.7, 2599.0], [76.8, 2599.0], [76.9, 2599.0], [77.0, 2599.0], [77.1, 2599.0], [77.2, 2600.0], [77.3, 2600.0], [77.4, 2600.0], [77.5, 2600.0], [77.6, 2600.0], [77.7, 2600.0], [77.8, 2600.0], [77.9, 2600.0], [78.0, 2600.0], [78.1, 2600.0], [78.2, 2600.0], [78.3, 2600.0], [78.4, 2600.0], [78.5, 2600.0], [78.6, 2601.0], [78.7, 2601.0], [78.8, 2601.0], [78.9, 2601.0], [79.0, 2601.0], [79.1, 2601.0], [79.2, 2601.0], [79.3, 2601.0], [79.4, 2601.0], [79.5, 2601.0], [79.6, 2601.0], [79.7, 2602.0], [79.8, 2602.0], [79.9, 2602.0], [80.0, 2602.0], [80.1, 2602.0], [80.2, 2602.0], [80.3, 2602.0], [80.4, 2602.0], [80.5, 2602.0], [80.6, 2603.0], [80.7, 2603.0], [80.8, 2603.0], [80.9, 2603.0], [81.0, 2603.0], [81.1, 2603.0], [81.2, 2603.0], [81.3, 2603.0], [81.4, 2604.0], [81.5, 2604.0], [81.6, 2604.0], [81.7, 2604.0], [81.8, 2604.0], [81.9, 2604.0], [82.0, 2604.0], [82.1, 2604.0], [82.2, 2605.0], [82.3, 2605.0], [82.4, 2605.0], [82.5, 2605.0], [82.6, 2605.0], [82.7, 2606.0], [82.8, 2606.0], [82.9, 2607.0], [83.0, 2608.0], [83.1, 2608.0], [83.2, 2610.0], [83.3, 2611.0], [83.4, 2612.0], [83.5, 2690.0], [83.6, 2690.0], [83.7, 2692.0], [83.8, 2693.0], [83.9, 2694.0], [84.0, 2694.0], [84.1, 2694.0], [84.2, 2695.0], [84.3, 2695.0], [84.4, 2695.0], [84.5, 2695.0], [84.6, 2695.0], [84.7, 2696.0], [84.8, 2696.0], [84.9, 2696.0], [85.0, 2696.0], [85.1, 2697.0], [85.2, 2697.0], [85.3, 2697.0], [85.4, 2697.0], [85.5, 2697.0], [85.6, 2697.0], [85.7, 2697.0], [85.8, 2697.0], [85.9, 2698.0], [86.0, 2698.0], [86.1, 2698.0], [86.2, 2698.0], [86.3, 2698.0], [86.4, 2698.0], [86.5, 2698.0], [86.6, 2698.0], [86.7, 2698.0], [86.8, 2699.0], [86.9, 2699.0], [87.0, 2699.0], [87.1, 2699.0], [87.2, 2699.0], [87.3, 2699.0], [87.4, 2699.0], [87.5, 2699.0], [87.6, 2699.0], [87.7, 2699.0], [87.8, 2700.0], [87.9, 2700.0], [88.0, 2700.0], [88.1, 2700.0], [88.2, 2700.0], [88.3, 2700.0], [88.4, 2700.0], [88.5, 2700.0], [88.6, 2700.0], [88.7, 2700.0], [88.8, 2700.0], [88.9, 2700.0], [89.0, 2700.0], [89.1, 2700.0], [89.2, 2701.0], [89.3, 2701.0], [89.4, 2701.0], [89.5, 2701.0], [89.6, 2701.0], [89.7, 2701.0], [89.8, 2701.0], [89.9, 2701.0], [90.0, 2702.0], [90.1, 2702.0], [90.2, 2702.0], [90.3, 2703.0], [90.4, 2703.0], [90.5, 2703.0], [90.6, 2703.0], [90.7, 2703.0], [90.8, 2704.0], [90.9, 2704.0], [91.0, 2705.0], [91.1, 2705.0], [91.2, 2705.0], [91.3, 2705.0], [91.4, 2705.0], [91.5, 2706.0], [91.6, 2707.0], [91.7, 2711.0], [91.8, 2788.0], [91.9, 2790.0], [92.0, 2790.0], [92.1, 2792.0], [92.2, 2792.0], [92.3, 2793.0], [92.4, 2793.0], [92.5, 2793.0], [92.6, 2794.0], [92.7, 2794.0], [92.8, 2794.0], [92.9, 2794.0], [93.0, 2795.0], [93.1, 2795.0], [93.2, 2795.0], [93.3, 2795.0], [93.4, 2795.0], [93.5, 2795.0], [93.6, 2796.0], [93.7, 2796.0], [93.8, 2796.0], [93.9, 2796.0], [94.0, 2796.0], [94.1, 2797.0], [94.2, 2797.0], [94.3, 2797.0], [94.4, 2797.0], [94.5, 2797.0], [94.6, 2797.0], [94.7, 2798.0], [94.8, 2798.0], [94.9, 2798.0], [95.0, 2798.0], [95.1, 2798.0], [95.2, 2799.0], [95.3, 2799.0], [95.4, 2799.0], [95.5, 2800.0], [95.6, 2800.0], [95.7, 2800.0], [95.8, 2800.0], [95.9, 2800.0], [96.0, 2801.0], [96.1, 2801.0], [96.2, 2801.0], [96.3, 2801.0], [96.4, 2801.0], [96.5, 2802.0], [96.6, 2802.0], [96.7, 2802.0], [96.8, 2803.0], [96.9, 2805.0], [97.0, 2805.0], [97.1, 2805.0], [97.2, 2805.0], [97.3, 2805.0], [97.4, 2809.0], [97.5, 2813.0], [97.6, 2890.0], [97.7, 2892.0], [97.8, 2893.0], [97.9, 2893.0], [98.0, 2893.0], [98.1, 2894.0], [98.2, 2895.0], [98.3, 2895.0], [98.4, 2896.0], [98.5, 2896.0], [98.6, 2896.0], [98.7, 2896.0], [98.8, 2896.0], [98.9, 2896.0], [99.0, 2897.0], [99.1, 2897.0], [99.2, 2897.0], [99.3, 2900.0], [99.4, 2900.0], [99.5, 2900.0], [99.6, 2902.0], [99.7, 2903.0], [99.8, 2996.0], [99.9, 3001.0], [100.0, 3091.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 158.0, "series": [{"data": [[0.0, 4.0], [600.0, 1.0], [700.0, 15.0], [800.0, 12.0], [900.0, 17.0], [1000.0, 17.0], [1100.0, 22.0], [1200.0, 43.0], [1300.0, 38.0], [1400.0, 30.0], [1500.0, 29.0], [100.0, 12.0], [1600.0, 34.0], [1700.0, 45.0], [1800.0, 36.0], [1900.0, 59.0], [2000.0, 41.0], [2100.0, 67.0], [2200.0, 112.0], [2300.0, 133.0], [2400.0, 158.0], [2500.0, 145.0], [2600.0, 151.0], [2700.0, 109.0], [2800.0, 54.0], [2900.0, 8.0], [3000.0, 2.0], [200.0, 10.0], [300.0, 5.0], [400.0, 2.0], [500.0, 5.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 33.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1183.0, "series": [{"data": [[0.0, 33.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 200.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1183.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 46.833333333333336, "minX": 1.55960652E12, "maxY": 50.0, "series": [{"data": [[1.55960652E12, 50.0], [1.55960658E12, 46.833333333333336]], "isOverall": false, "label": "Call isPrime\/ with 2147483647 TG", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960658E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1401.0, "minX": 1.0, "maxY": 2394.0, "series": [{"data": [[32.0, 2248.0], [34.0, 2299.5], [37.0, 2208.0], [36.0, 2394.0], [38.0, 2303.0], [41.0, 2200.0], [40.0, 2297.0], [43.0, 2100.0], [42.0, 2293.0], [45.0, 2004.0], [44.0, 2099.0], [47.0, 1999.0], [46.0, 2004.0], [48.0, 1998.0], [3.0, 1594.5], [50.0, 2148.130847953218], [4.0, 1602.0], [6.0, 1548.5], [7.0, 1401.0], [8.0, 1601.0], [9.0, 1701.0], [10.0, 1703.0], [11.0, 1996.0], [12.0, 1903.0], [13.0, 1900.0], [14.0, 1898.0], [16.0, 1896.0], [1.0, 1598.0], [18.0, 1801.5], [19.0, 1700.0], [20.0, 1799.0], [21.0, 1601.0], [22.0, 1806.0], [23.0, 1801.0], [24.0, 1904.0], [25.0, 1898.0], [26.0, 1997.0], [27.0, 1997.0], [28.0, 2098.0], [29.0, 2102.0], [30.0, 2105.0]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}, {"data": [[49.1412429378531, 2141.327683615822]], "isOverall": false, "label": "Call isPrime\/2147483647-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 876.8, "minX": 1.55960652E12, "maxY": 2975.6, "series": [{"data": [[1.55960652E12, 2975.6], [1.55960658E12, 1107.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55960652E12, 2356.4], [1.55960658E12, 876.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960658E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1873.635416666667, "minX": 1.55960652E12, "maxY": 2240.934108527133, "series": [{"data": [[1.55960652E12, 2240.934108527133], [1.55960658E12, 1873.635416666667]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960658E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1873.546874999999, "minX": 1.55960652E12, "maxY": 2240.776162790695, "series": [{"data": [[1.55960652E12, 2240.776162790695], [1.55960658E12, 1873.546874999999]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960658E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.34114583333333337, "minX": 1.55960652E12, "maxY": 1.81782945736434, "series": [{"data": [[1.55960652E12, 1.81782945736434], [1.55960658E12, 0.34114583333333337]], "isOverall": false, "label": "Call isPrime\/2147483647", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960658E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35.0, "minX": 1.55960652E12, "maxY": 3091.0, "series": [{"data": [[1.55960652E12, 3091.0], [1.55960658E12, 2996.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55960652E12, 35.0], [1.55960658E12, 701.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55960652E12, 2703.0], [1.55960658E12, 2700.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55960652E12, 2897.0], [1.55960658E12, 2896.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55960652E12, 2799.35], [1.55960658E12, 2796.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960658E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 218.0, "minX": 14.0, "maxY": 2601.5, "series": [{"data": [[34.0, 1997.5], [35.0, 2098.0], [38.0, 218.0], [39.0, 1394.0], [43.0, 1498.0], [14.0, 2201.5], [63.0, 1398.0], [16.0, 2601.0], [17.0, 2499.0], [18.0, 2500.0], [19.0, 2500.0], [20.0, 2291.0], [21.0, 2600.0], [22.0, 2306.5], [23.0, 2299.0], [24.0, 2601.5], [25.0, 2401.0], [26.0, 2402.5], [27.0, 1294.0], [30.0, 1901.0], [31.0, 902.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 217.5, "minX": 14.0, "maxY": 2601.0, "series": [{"data": [[34.0, 1997.5], [35.0, 2098.0], [38.0, 217.5], [39.0, 1393.0], [43.0, 1498.0], [14.0, 2201.0], [63.0, 1398.0], [16.0, 2601.0], [17.0, 2499.0], [18.0, 2500.0], [19.0, 2500.0], [20.0, 2291.0], [21.0, 2600.0], [22.0, 2306.5], [23.0, 2299.0], [24.0, 2601.0], [25.0, 2401.0], [26.0, 2402.0], [27.0, 1294.0], [30.0, 1901.0], [31.0, 902.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.566666666666666, "minX": 1.55960652E12, "maxY": 18.033333333333335, "series": [{"data": [[1.55960652E12, 18.033333333333335], [1.55960658E12, 5.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960658E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.4, "minX": 1.55960652E12, "maxY": 17.2, "series": [{"data": [[1.55960652E12, 17.2], [1.55960658E12, 6.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55960658E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.4, "minX": 1.55960652E12, "maxY": 17.2, "series": [{"data": [[1.55960652E12, 17.2], [1.55960658E12, 6.4]], "isOverall": false, "label": "Call isPrime\/2147483647-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960658E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.4, "minX": 1.55960652E12, "maxY": 17.2, "series": [{"data": [[1.55960652E12, 17.2], [1.55960658E12, 6.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55960658E12, "title": "Total Transactions Per Second"}},
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

