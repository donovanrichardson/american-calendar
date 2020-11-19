const DateTime = luxon.DateTime;

function makeDay(y, m, d){
    return DateTime.fromObject({year:y,month:m,day:d,zone:'America/New_York'})
}

const starts =
[
        {pres:1,date:makeDay(1789,4,30)},
        {pres:1,date:makeDay(1790,3,4)},
        {pres:1,date:makeDay(1791,3,4)},
        {pres:1,date:makeDay(1792,3,4)},
        {pres:1,date:makeDay(1793,3,4)},
        {pres:1,date:makeDay(1794,3,4)},
        {pres:1,date:makeDay(1795,3,4)},
        {pres:1,date:makeDay(1796,3,4)},

        {pres:2,date:makeDay(1797,3,4)},
        {pres:2,date:makeDay(1798,3,4)},
        {pres:2,date:makeDay(1799,3,4)},
        {pres:2,date:makeDay(1800,3,4)},

        {pres:3,date:makeDay(1801,3,4)},
        {pres:3,date:makeDay(1802,3,4)},
        {pres:3,date:makeDay(1803,3,4)},
        {pres:3,date:makeDay(1804,3,4)},
        {pres:3,date:makeDay(1805,3,4)},
        {pres:3,date:makeDay(1806,3,4)},
        {pres:3,date:makeDay(1807,3,4)},
        {pres:3,date:makeDay(1808,3,4)},

        {pres:4,date:makeDay(1809,3,4)},
        {pres:4,date:makeDay(1810,3,4)},
        {pres:4,date:makeDay(1811,3,4)},
        {pres:4,date:makeDay(1812,3,4)},
        {pres:4,date:makeDay(1813,3,4)},
        {pres:4,date:makeDay(1814,3,4)},
        {pres:4,date:makeDay(1815,3,4)},
        {pres:4,date:makeDay(1816,3,4)},

        {pres:5,date:makeDay(1817,3,4)},
        {pres:5,date:makeDay(1818,3,4)},
        {pres:5,date:makeDay(1819,3,4)},
        {pres:5,date:makeDay(1820,3,4)},
        {pres:5,date:makeDay(1821,3,4)},
        {pres:5,date:makeDay(1822,3,4)},
        {pres:5,date:makeDay(1823,3,4)},
        {pres:5,date:makeDay(1824,3,4)},

        {pres:6,date:makeDay(1825,3,4)},
        {pres:6,date:makeDay(1826,3,4)},
        {pres:6,date:makeDay(1827,3,4)},
        {pres:6,date:makeDay(1828,3,4)},

        {pres:7,date:makeDay(1829,3,4)},
        {pres:7,date:makeDay(1830,3,4)},
        {pres:7,date:makeDay(1831,3,4)},
        {pres:7,date:makeDay(1832,3,4)},
        {pres:7,date:makeDay(1833,3,4)},
        {pres:7,date:makeDay(1834,3,4)},
        {pres:7,date:makeDay(1835,3,4)},
        {pres:7,date:makeDay(1836,3,4)},

        {pres:8,date:makeDay(1837,3,4)},
        {pres:8,date:makeDay(1838,3,4)},
        {pres:8,date:makeDay(1839,3,4)},
        {pres:8,date:makeDay(1840,3,4)},

        {pres:9,date:makeDay(1841,3,4)},

        {pres:10,date:makeDay(1841,4,4)},
        {pres:10,date:makeDay(1842,3,4)},
        {pres:10,date:makeDay(1843,3,4)},
        {pres:10,date:makeDay(1844,3,4)},

        {pres:11,date:makeDay(1845,3,4)},
        {pres:11,date:makeDay(1846,3,4)},
        {pres:11,date:makeDay(1847,3,4)},
        {pres:11,date:makeDay(1848,3,4)},

        {pres:12,date:makeDay(1849,3,4)},
        {pres:12,date:makeDay(1850,3,4)},

        {pres:13,date:makeDay(1850,7,9)},
        {pres:13,date:makeDay(1851,3,4)},
        {pres:13,date:makeDay(1852,3,4)},

        {pres:14,date:makeDay(1853,3,4)},
        {pres:14,date:makeDay(1854,3,4)},
        {pres:14,date:makeDay(1855,3,4)},
        {pres:14,date:makeDay(1856,3,4)},

        {pres:15,date:makeDay(1857,3,4)},
        {pres:15,date:makeDay(1858,3,4)},
        {pres:15,date:makeDay(1859,3,4)},
        {pres:15,date:makeDay(1860,3,4)},

        {pres:16,date:makeDay(1861,3,4)},
        {pres:16,date:makeDay(1862,3,4)},
        {pres:16,date:makeDay(1863,3,4)},
        {pres:16,date:makeDay(1864,3,4)},
        {pres:16,date:makeDay(1865,3,4), killed:true},

        {pres:17,date:makeDay(1865,4,15)},
        {pres:17,date:makeDay(1866,3,4)},
        {pres:17,date:makeDay(1867,3,4)},
        {pres:17,date:makeDay(1868,3,4)},

        {pres:18,date:makeDay(1869,3,4)},
        {pres:18,date:makeDay(1870,3,4)},
        {pres:18,date:makeDay(1871,3,4)},
        {pres:18,date:makeDay(1872,3,4)},
        {pres:18,date:makeDay(1873,3,4)},
        {pres:18,date:makeDay(1874,3,4)},
        {pres:18,date:makeDay(1875,3,4)},
        {pres:18,date:makeDay(1876,3,4)},

        {pres:19,date:makeDay(1877,3,4)},
        {pres:19,date:makeDay(1878,3,4)},
        {pres:19,date:makeDay(1879,3,4)},
        {pres:19,date:makeDay(1880,3,4)},

        {pres:20,date:makeDay(1881,3,4),killed:true},

        {pres:21,date:makeDay(1881,9,19)},
        {pres:21,date:makeDay(1882,3,4)},
        {pres:21,date:makeDay(1883,3,4)},
        {pres:21,date:makeDay(1884,3,4)},

        {pres:22,date:makeDay(1885,3,4)},
        {pres:22,date:makeDay(1886,3,4)},
        {pres:22,date:makeDay(1887,3,4)},
        {pres:22,date:makeDay(1888,3,4)},

        {pres:23,date:makeDay(1889,3,4)},
        {pres:23,date:makeDay(1890,3,4)},
        {pres:23,date:makeDay(1891,3,4)},
        {pres:23,date:makeDay(1892,3,4)},

        {pres:24,date:makeDay(1893,3,4)},
        {pres:24,date:makeDay(1894,3,4)},
        {pres:24,date:makeDay(1895,3,4)},
        {pres:24,date:makeDay(1896,3,4)},

        {pres:25,date:makeDay(1897,3,4)},
        {pres:25,date:makeDay(1898,3,4)},
        {pres:25,date:makeDay(1899,3,4)},
        {pres:25,date:makeDay(1900,3,4)},
        {pres:25,date:makeDay(1901,3,4),killed:true},
        
        {pres:26,date:makeDay(1901,9,14)},
        {pres:26,date:makeDay(1902,3,4)},
        {pres:26,date:makeDay(1903,3,4)},
        {pres:26,date:makeDay(1904,3,4)},
        {pres:26,date:makeDay(1905,3,4)},
        {pres:26,date:makeDay(1906,3,4)},
        {pres:26,date:makeDay(1907,3,4)},
        {pres:26,date:makeDay(1908,3,4)},

        {pres:27,date:makeDay(1909,3,4)},
        {pres:27,date:makeDay(1910,3,4)},
        {pres:27,date:makeDay(1911,3,4)},
        {pres:27,date:makeDay(1912,3,4)},

        {pres:28,date:makeDay(1913,3,4)},
        {pres:28,date:makeDay(1914,3,4)},
        {pres:28,date:makeDay(1915,3,4)},
        {pres:28,date:makeDay(1916,3,4)},
        {pres:28,date:makeDay(1917,3,4)},
        {pres:28,date:makeDay(1918,3,4)},
        {pres:28,date:makeDay(1919,3,4)},
        {pres:28,date:makeDay(1920,3,4)},
        
        {pres:29,date:makeDay(1921,3,4)},
        {pres:29,date:makeDay(1922,3,4)},
        {pres:29,date:makeDay(1923,3,4)},

        {pres:30,date:makeDay(1923,8,2)},
        {pres:30,date:makeDay(1924,3,4)},
        {pres:30,date:makeDay(1925,3,4)},
        {pres:30,date:makeDay(1926,3,4)},
        {pres:30,date:makeDay(1927,3,4)},
        {pres:30,date:makeDay(1928,3,4)},

        {pres:31,date:makeDay(1929,3,4)},
        {pres:31,date:makeDay(1930,3,4)},
        {pres:31,date:makeDay(1931,3,4)},
        {pres:31,date:makeDay(1932,3,4)},

        {pres:32,date:makeDay(1933,3,4)},
        {pres:32,date:makeDay(1934,3,4)},
        {pres:32,date:makeDay(1935,3,4)},
        {pres:32,date:makeDay(1936,3,4)},
        {pres:32,date:makeDay(1937,1,20)},
        {pres:32,date:makeDay(1938,1,20)},
        {pres:32,date:makeDay(1939,1,20)},
        {pres:32,date:makeDay(1940,1,20)},
        {pres:32,date:makeDay(1941,1,20)},
        {pres:32,date:makeDay(1942,1,20)},
        {pres:32,date:makeDay(1943,1,20)},
        {pres:32,date:makeDay(1944,1,20)},
        {pres:32,date:makeDay(1945,1,20)},

        {pres:33,date:makeDay(1945,4,12)},
        {pres:33,date:makeDay(1946,1,20)},
        {pres:33,date:makeDay(1947,1,20)},
        {pres:33,date:makeDay(1948,1,20)},
        {pres:33,date:makeDay(1949,1,20)},
        {pres:33,date:makeDay(1950,1,20)},
        {pres:33,date:makeDay(1951,1,20)},
        {pres:33,date:makeDay(1952,1,20)},

        {pres:34,date:makeDay(1953,1,20)},
        {pres:34,date:makeDay(1954,1,20)},
        {pres:34,date:makeDay(1955,1,20)},
        {pres:34,date:makeDay(1956,1,20)},
        {pres:34,date:makeDay(1957,1,20)},
        {pres:34,date:makeDay(1958,1,20)},
        {pres:34,date:makeDay(1959,1,20)},
        {pres:34,date:makeDay(1960,1,20)},

        {pres:35,date:makeDay(1961,1,20)},
        {pres:35,date:makeDay(1962,1,20)},
        {pres:35,date:makeDay(1963,1,20),killed:true},

        {pres:36,date:makeDay(1963,11,22)},
        {pres:36,date:makeDay(1964,1,20)},
        {pres:36,date:makeDay(1965,1,20)},
        {pres:36,date:makeDay(1966,1,20)},
        {pres:36,date:makeDay(1967,1,20)},
        {pres:36,date:makeDay(1968,1,20)},
        
        {pres:37,date:makeDay(1969,1,20)},
        {pres:37,date:makeDay(1970,1,20)},
        {pres:37,date:makeDay(1971,1,20)},
        {pres:37,date:makeDay(1972,1,20)},
        {pres:37,date:makeDay(1973,1,20)},
        {pres:37,date:makeDay(1974,1,20)},

        {pres:38,date:makeDay(1974,8,9)},
        {pres:38,date:makeDay(1975,1,20)},
        {pres:38,date:makeDay(1976,1,20)},

        {pres:39,date:makeDay(1977,1,20)},
        {pres:39,date:makeDay(1978,1,20)},
        {pres:39,date:makeDay(1979,1,20)},
        {pres:39,date:makeDay(1980,1,20)},

        {pres:40,date:makeDay(1981,1,20)},
        {pres:40,date:makeDay(1982,1,20)},
        {pres:40,date:makeDay(1983,1,20)},
        {pres:40,date:makeDay(1984,1,20)},
        {pres:40,date:makeDay(1985,1,20)},
        {pres:40,date:makeDay(1986,1,20)},
        {pres:40,date:makeDay(1987,1,20)},
        {pres:40,date:makeDay(1988,1,20)},

        {pres:41,date:makeDay(1989,1,20)},
        {pres:41,date:makeDay(1990,1,20)},
        {pres:41,date:makeDay(1991,1,20)},
        {pres:41,date:makeDay(1992,1,20)},

        {pres:42,date:makeDay(1993,1,20)},
        {pres:42,date:makeDay(1994,1,20)},
        {pres:42,date:makeDay(1995,1,20)},
        {pres:42,date:makeDay(1996,1,20)},
        {pres:42,date:makeDay(1997,1,20)},
        {pres:42,date:makeDay(1998,1,20)},
        {pres:42,date:makeDay(1999,1,20)},
        {pres:42,date:makeDay(2000,1,20)},

        {pres:43,date:makeDay(2001,1,20)},
        {pres:43,date:makeDay(2002,1,20)},
        {pres:43,date:makeDay(2003,1,20)},
        {pres:43,date:makeDay(2004,1,20)},
        {pres:43,date:makeDay(2005,1,20)},
        {pres:43,date:makeDay(2006,1,20)},
        {pres:43,date:makeDay(2007,1,20)},
        {pres:43,date:makeDay(2008,1,20)},

        {pres:44,date:makeDay(2009,1,20)},
        {pres:44,date:makeDay(2010,1,20)},
        {pres:44,date:makeDay(2011,1,20)},
        {pres:44,date:makeDay(2012,1,20)},
        {pres:44,date:makeDay(2013,1,20)},
        {pres:44,date:makeDay(2014,1,20)},
        {pres:44,date:makeDay(2015,1,20)},
        {pres:44,date:makeDay(2016,1,20)},

        {pres:45,date:makeDay(2017,1,20)},
        {pres:45,date:makeDay(2018,1,20)},
        {pres:45,date:makeDay(2019,1,20)},
        {pres:45,date:makeDay(2020,1,20)},
]

const current = starts[starts.length-1];
const startOrdinal = current.date.startOf('day')
const todayOrdinal = DateTime.fromObject({zone:'America/New_York'}).plus({days:1}).startOf('day')
$('#presdate').text(todayOrdinal.diff(startOrdinal, 'days').toObject().days)

let pres;
let presYear
for(let i = 0; i<starts.length;i++){
    const theStart = starts[i]
    const startP = theStart.date.toLocaleString(DateTime.DATE_FULL)
    let endP
    if(theStart.pres === pres){
        presYear++
    }else{
        pres = theStart.pres
        presYear = 1
    }
    if(i+1 !== starts.length){
        const theEnd = i + 1 === starts.length ? null : starts[i+1]
        // console.log(t);
        endP = $('<span>').text(theEnd.date.toLocaleString(DateTime.DATE_FULL))
        if (theStart.killed){
            endP.addClass('killed')
        }
    }else{
        endP = 'Present'
    }

    const thePeriod = `${startP} to ${endP}`

    const result = $('<tr>').addClass('period').append($('<td>').append($('<p>').append(startP).append(' to ').append(endP))).append($('<td>').append($('<p>').text(`Presidency ${pres} Year ${presYear}`)))
    $('.dates').append(result)

    // const result = $('<tr>').addClass('period').append($('<td>').append($('<p>').text(thePeriod))).append($('<td>').append($('<p>').text(`Presidency ${pres} Year ${presYear}`)))
    // $('.dates').append(result)
}

// starts.forEach(s=>{
//     const theDate = $('<h3>').text(s.date.toLocaleString(DateTime.DATE_FULL))
//     if(s.killed){
//         theDate.addClass('killed')
//     }
//     $('body').append(theDate)
// })
