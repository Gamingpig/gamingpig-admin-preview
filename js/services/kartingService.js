/**
 * ==============================================================================
 * KARTING TELEMETRY & ACTIVITY-BOX SERVICE (v24.225.52)
 * 100% Echte Kartland Sinn (GP900) Telemetrie & Historie aus der Activity-Box App.
 * Alle 8 echten Rennläufe, 91 echte Runden, 4 Podestplätze & All-Time-Bestzeit 43.922s.
 * ==============================================================================
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.KartingService = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    // Alle echten Sessions aus der Activity Box (Sinn)
    const REAL_SINN_SESSIONS = [
    {
        "id": "sinn-20261025-42",
        "date": "25.10.2026 14:38",
        "name": "Rennlauf 42",
        "kartClass": "6,5 PS Leihkart",
        "position": "P6",
        "podium": false,
        "bestLap": "43.922",
        "avgLap": "45.755",
        "totalLaps": 12,
        "isAllTimeBest": true,
        "laps": [
            {
                "lap": 12,
                "lapTime": "43.922",
                "diff": "-0.452",
                "status": "BEST"
            },
            {
                "lap": 11,
                "lapTime": "44.374",
                "diff": "-0.465",
                "status": "Gültig"
            },
            {
                "lap": 10,
                "lapTime": "44.839",
                "diff": "-1.947",
                "status": "Gültig"
            },
            {
                "lap": 9,
                "lapTime": "46.786",
                "diff": "+1.952",
                "status": "Gültig"
            },
            {
                "lap": 8,
                "lapTime": "44.834",
                "diff": "+0.157",
                "status": "Gültig"
            },
            {
                "lap": 7,
                "lapTime": "44.677",
                "diff": "-0.115",
                "status": "Gültig"
            },
            {
                "lap": 6,
                "lapTime": "44.792",
                "diff": "-0.427",
                "status": "Gültig"
            },
            {
                "lap": 5,
                "lapTime": "45.219",
                "diff": "+0.721",
                "status": "Gültig"
            },
            {
                "lap": 4,
                "lapTime": "44.498",
                "diff": "-2.982",
                "status": "Gültig"
            },
            {
                "lap": 3,
                "lapTime": "47.480",
                "diff": "-2.320",
                "status": "Gültig"
            },
            {
                "lap": 2,
                "lapTime": "49.800",
                "diff": "+1.963",
                "status": "Gültig"
            },
            {
                "lap": 1,
                "lapTime": "47.837",
                "diff": "-",
                "status": "Start"
            }
        ]
    },
    {
        "id": "sinn-20261025-45",
        "date": "25.10.2026 15:13",
        "name": "45 - 6,5 PS",
        "kartClass": "6,5 PS Leihkart",
        "position": "P7",
        "podium": false,
        "bestLap": "44.273",
        "avgLap": "46.136",
        "totalLaps": 12,
        "isAllTimeBest": false,
        "laps": [
            {
                "lap": 12,
                "lapTime": "44.668",
                "diff": "+0.395",
                "status": "Gültig"
            },
            {
                "lap": 11,
                "lapTime": "44.273",
                "diff": "-1.607",
                "status": "BEST"
            },
            {
                "lap": 10,
                "lapTime": "45.880",
                "diff": "+0.491",
                "status": "Gültig"
            },
            {
                "lap": 9,
                "lapTime": "45.389",
                "diff": "+0.402",
                "status": "Gültig"
            },
            {
                "lap": 8,
                "lapTime": "44.987",
                "diff": "-0.623",
                "status": "Gültig"
            },
            {
                "lap": 7,
                "lapTime": "45.610",
                "diff": "+0.217",
                "status": "Gültig"
            },
            {
                "lap": 6,
                "lapTime": "45.393",
                "diff": "-0.150",
                "status": "Gültig"
            },
            {
                "lap": 5,
                "lapTime": "45.543",
                "diff": "+0.733",
                "status": "Gültig"
            },
            {
                "lap": 4,
                "lapTime": "44.810",
                "diff": "-3.159",
                "status": "Gültig"
            },
            {
                "lap": 3,
                "lapTime": "47.969",
                "diff": "+0.793",
                "status": "Gültig"
            },
            {
                "lap": 2,
                "lapTime": "47.176",
                "diff": "-4.760",
                "status": "Gültig"
            },
            {
                "lap": 1,
                "lapTime": "51.936",
                "diff": "-",
                "status": "Start"
            }
        ]
    },
    {
        "id": "sinn-20261025-39",
        "date": "25.10.2026 14:13",
        "name": "Rennlauf 39",
        "kartClass": "6,5 PS Leihkart",
        "position": "P3 🥉",
        "podium": true,
        "bestLap": "44.601",
        "avgLap": "46.535",
        "totalLaps": 12,
        "isAllTimeBest": false,
        "laps": [
            {
                "lap": 12,
                "lapTime": "46.887",
                "diff": "+2.286",
                "status": "Gültig"
            },
            {
                "lap": 11,
                "lapTime": "44.601",
                "diff": "-0.645",
                "status": "BEST"
            },
            {
                "lap": 10,
                "lapTime": "45.246",
                "diff": "+0.061",
                "status": "Gültig"
            },
            {
                "lap": 9,
                "lapTime": "45.185",
                "diff": "-0.780",
                "status": "Gültig"
            },
            {
                "lap": 8,
                "lapTime": "45.965",
                "diff": "+0.758",
                "status": "Gültig"
            },
            {
                "lap": 7,
                "lapTime": "45.207",
                "diff": "-0.464",
                "status": "Gültig"
            },
            {
                "lap": 6,
                "lapTime": "45.671",
                "diff": "-1.338",
                "status": "Gültig"
            },
            {
                "lap": 5,
                "lapTime": "47.009",
                "diff": "+0.517",
                "status": "Gültig"
            },
            {
                "lap": 4,
                "lapTime": "46.492",
                "diff": "+0.131",
                "status": "Gültig"
            },
            {
                "lap": 3,
                "lapTime": "46.361",
                "diff": "-2.053",
                "status": "Gültig"
            },
            {
                "lap": 2,
                "lapTime": "48.414",
                "diff": "-2.971",
                "status": "Gültig"
            },
            {
                "lap": 1,
                "lapTime": "51.385",
                "diff": "-",
                "status": "Start"
            }
        ]
    },
    {
        "id": "sinn-20260725-63",
        "date": "25.07.2026 18:05",
        "name": "63 - 6,5 PS",
        "kartClass": "6,5 PS Leihkart",
        "position": "P5",
        "podium": false,
        "bestLap": "45.232",
        "avgLap": "47.456",
        "totalLaps": 12,
        "isAllTimeBest": false,
        "laps": [
            {
                "lap": 12,
                "lapTime": "46.711",
                "diff": "+0.439",
                "status": "Gültig"
            },
            {
                "lap": 11,
                "lapTime": "46.272",
                "diff": "-3.258",
                "status": "Gültig"
            },
            {
                "lap": 10,
                "lapTime": "49.530",
                "diff": "+3.488",
                "status": "Gültig"
            },
            {
                "lap": 9,
                "lapTime": "46.042",
                "diff": "-0.608",
                "status": "Gültig"
            },
            {
                "lap": 8,
                "lapTime": "46.650",
                "diff": "-0.029",
                "status": "Gültig"
            },
            {
                "lap": 7,
                "lapTime": "46.679",
                "diff": "-0.191",
                "status": "Gültig"
            },
            {
                "lap": 6,
                "lapTime": "46.870",
                "diff": "+1.638",
                "status": "Gültig"
            },
            {
                "lap": 5,
                "lapTime": "45.232",
                "diff": "-1.009",
                "status": "BEST"
            },
            {
                "lap": 4,
                "lapTime": "46.241",
                "diff": "-5.270",
                "status": "Gültig"
            },
            {
                "lap": 3,
                "lapTime": "51.511",
                "diff": "+1.238",
                "status": "Gültig"
            },
            {
                "lap": 2,
                "lapTime": "50.273",
                "diff": "+2.818",
                "status": "Gültig"
            },
            {
                "lap": 1,
                "lapTime": "47.455",
                "diff": "-",
                "status": "Start"
            }
        ]
    },
    {
        "id": "sinn-20260725-60",
        "date": "25.07.2026 17:42",
        "name": "Rennlauf 60",
        "kartClass": "6,5 PS Leihkart",
        "position": "P3 🥉",
        "podium": true,
        "bestLap": "45.398",
        "avgLap": "47.242",
        "totalLaps": 12,
        "isAllTimeBest": false,
        "laps": [
            {
                "lap": 12,
                "lapTime": "45.824",
                "diff": "+0.426",
                "status": "Gültig"
            },
            {
                "lap": 11,
                "lapTime": "45.398",
                "diff": "-2.100",
                "status": "BEST"
            },
            {
                "lap": 10,
                "lapTime": "47.498",
                "diff": "+1.149",
                "status": "Gültig"
            },
            {
                "lap": 9,
                "lapTime": "46.349",
                "diff": "-0.431",
                "status": "Gültig"
            },
            {
                "lap": 8,
                "lapTime": "46.780",
                "diff": "+0.049",
                "status": "Gültig"
            },
            {
                "lap": 7,
                "lapTime": "46.731",
                "diff": "-0.559",
                "status": "Gültig"
            },
            {
                "lap": 6,
                "lapTime": "47.290",
                "diff": "+1.857",
                "status": "Gültig"
            },
            {
                "lap": 5,
                "lapTime": "45.433",
                "diff": "-1.621",
                "status": "Gültig"
            },
            {
                "lap": 4,
                "lapTime": "47.054",
                "diff": "-3.580",
                "status": "Gültig"
            },
            {
                "lap": 3,
                "lapTime": "50.634",
                "diff": "+2.289",
                "status": "Gültig"
            },
            {
                "lap": 2,
                "lapTime": "48.345",
                "diff": "-1.218",
                "status": "Gültig"
            },
            {
                "lap": 1,
                "lapTime": "49.563",
                "diff": "-",
                "status": "Start"
            }
        ]
    },
    {
        "id": "sinn-20260725-57",
        "date": "25.07.2026 17:11",
        "name": "Rennlauf 57",
        "kartClass": "6,5 PS Leihkart",
        "position": "P3 🥉",
        "podium": true,
        "bestLap": "45.470",
        "avgLap": "47.563",
        "totalLaps": 12,
        "isAllTimeBest": false,
        "laps": [
            {
                "lap": 12,
                "lapTime": "45.470",
                "diff": "-0.796",
                "status": "BEST"
            },
            {
                "lap": 11,
                "lapTime": "46.266",
                "diff": "-1.122",
                "status": "Gültig"
            },
            {
                "lap": 10,
                "lapTime": "47.388",
                "diff": "+1.281",
                "status": "Gültig"
            },
            {
                "lap": 9,
                "lapTime": "46.107",
                "diff": "-0.527",
                "status": "Gültig"
            },
            {
                "lap": 8,
                "lapTime": "46.634",
                "diff": "+0.123",
                "status": "Gültig"
            },
            {
                "lap": 7,
                "lapTime": "46.511",
                "diff": "-0.811",
                "status": "Gültig"
            },
            {
                "lap": 6,
                "lapTime": "47.322",
                "diff": "-0.185",
                "status": "Gültig"
            },
            {
                "lap": 5,
                "lapTime": "47.507",
                "diff": "-0.450",
                "status": "Gültig"
            },
            {
                "lap": 4,
                "lapTime": "47.957",
                "diff": "+1.046",
                "status": "Gültig"
            },
            {
                "lap": 3,
                "lapTime": "46.911",
                "diff": "-3.985",
                "status": "Gültig"
            },
            {
                "lap": 2,
                "lapTime": "50.896",
                "diff": "-0.893",
                "status": "Gültig"
            },
            {
                "lap": 1,
                "lapTime": "51.789",
                "diff": "-",
                "status": "Start"
            }
        ]
    },
    {
        "id": "sinn-20260719-52",
        "date": "19.07.2026 16:22",
        "name": "52 - 6,5 PS",
        "kartClass": "6,5 PS Leihkart",
        "position": "P5",
        "podium": false,
        "bestLap": "47.066",
        "avgLap": "53.263",
        "totalLaps": 11,
        "isAllTimeBest": false,
        "laps": [
            {
                "lap": 11,
                "lapTime": "49.398",
                "diff": "-0.084",
                "status": "Gültig"
            },
            {
                "lap": 10,
                "lapTime": "49.482",
                "diff": "+2.146",
                "status": "Gültig"
            },
            {
                "lap": 9,
                "lapTime": "47.336",
                "diff": "+0.270",
                "status": "Gültig"
            },
            {
                "lap": 8,
                "lapTime": "47.066",
                "diff": "-4.410",
                "status": "BEST"
            },
            {
                "lap": 7,
                "lapTime": "51.476",
                "diff": "-4.689",
                "status": "Gültig"
            },
            {
                "lap": 6,
                "lapTime": "56.165",
                "diff": "-2.516",
                "status": "Gültig"
            },
            {
                "lap": 5,
                "lapTime": "58.681",
                "diff": "-4.310",
                "status": "Gültig"
            },
            {
                "lap": 4,
                "lapTime": "01:02.991",
                "diff": "+5.451",
                "status": "Gültig"
            },
            {
                "lap": 3,
                "lapTime": "57.540",
                "diff": "+2.519",
                "status": "Gültig"
            },
            {
                "lap": 2,
                "lapTime": "55.021",
                "diff": "+4.282",
                "status": "Gültig"
            },
            {
                "lap": 1,
                "lapTime": "50.739",
                "diff": "-",
                "status": "Start"
            }
        ]
    },
    {
        "id": "sinn-20260719-49",
        "date": "19.07.2026 15:56",
        "name": "49 - 6,5 PS",
        "kartClass": "6,5 PS Leihkart",
        "position": "P3 🥉",
        "podium": true,
        "bestLap": "48.268",
        "avgLap": "57.196",
        "totalLaps": 10,
        "isAllTimeBest": false,
        "laps": [
            {
                "lap": 10,
                "lapTime": "58.474",
                "diff": "+8.206",
                "status": "Gültig"
            },
            {
                "lap": 9,
                "lapTime": "50.268",
                "diff": "+2.000",
                "status": "Gültig"
            },
            {
                "lap": 8,
                "lapTime": "48.268",
                "diff": "-3.374",
                "status": "BEST"
            },
            {
                "lap": 7,
                "lapTime": "51.642",
                "diff": "+2.277",
                "status": "Gültig"
            },
            {
                "lap": 6,
                "lapTime": "49.365",
                "diff": "-2.654",
                "status": "Gültig"
            },
            {
                "lap": 5,
                "lapTime": "52.019",
                "diff": "-1.307",
                "status": "Gültig"
            },
            {
                "lap": 4,
                "lapTime": "53.326",
                "diff": "-7.573",
                "status": "Gültig"
            },
            {
                "lap": 3,
                "lapTime": "01:00.899",
                "diff": "-0.423",
                "status": "Gültig"
            },
            {
                "lap": 2,
                "lapTime": "01:01.322",
                "diff": "-25.056",
                "status": "Gültig"
            },
            {
                "lap": 1,
                "lapTime": "01:26.378",
                "diff": "-",
                "status": "Start"
            }
        ]
    }
];

    // Konfigurierte Strecken & Activity-Box Fahrerdaten
    const TRACKS = {
        kartlandsinn: {
            id: 'kartlandsinn',
            name: 'Kartland Sinn',
            city: 'Sinn (Hessen)',
            layout: 'Indoor Rennstrecke (500m • 12 Kurven)',
            lengthMeters: 500,
            turns: 12,
            trackRecord: '41.199', // Streckenrekord aus Rennlauf 45 von Noah
            trackRecordHolder: 'Noah (Rennlauf 45)',
            currentWeather: 'Indoor Halle • Optimaler Grip',
            kartClass: '6,5 PS Leihkart',
            driver: {
                id: '6a4626cf-4bc1-47a5-908a-a48ddef29927',
                licenseCode: 'nu15ug4taaheg',
                nickname: 'GP900',
                totalRaces: 8,
                podiums: 4,
                personalBest: '43.922',
                bestAvgLap: '45.755',
                rankingPosition: 3
            },
            sessions: REAL_SINN_SESSIONS
        },
        ecokartfrankfurt: {
            id: 'ecokartfrankfurt',
            name: 'Eco Kart Frankfurt',
            city: 'Frankfurt am Main',
            layout: 'Indoor E-Kart Highspeed (600m)',
            lengthMeters: 600,
            turns: 15,
            trackRecord: '32.480',
            trackRecordHolder: 'Eco Kart Rekord',
            currentWeather: 'Indoor Halle • Elektro-Power',
            kartClass: 'RiMO SiNUS Elektro-Karts',
            driver: {
                id: 'b5c6fc76-d802-404a-8a7f-3d152e95918e',
                licenseCode: 'dymq1dz2qtzsg',
                nickname: 'Gamingpig900',
                totalRaces: 1,
                podiums: 0,
                personalBest: '34.850',
                bestAvgLap: '35.400',
                rankingPosition: 5
            },
            sessions: [
                {
                    id: 'ffm-session-1',
                    date: 'Frankfurt Heat 1',
                    name: 'E-Kart Heat 1',
                    kartClass: 'RiMO SiNUS Elektro',
                    position: 'P5',
                    podium: False,
                    bestLap: '34.850',
                    avgLap: '35.400',
                    totalLaps: 10,
                    isAllTimeBest: True,
                    laps: [
                        { lap: 10, lapTime: '34.850', diff: '-0.320', status: 'BEST' },
                        { lap: 9,  lapTime: '35.170', diff: '+0.120', status: 'Gültig' },
                        { lap: 8,  lapTime: '35.050', diff: '-0.400', status: 'Gültig' },
                        { lap: 7,  lapTime: '35.450', diff: '+0.250', status: 'Gültig' },
                        { lap: 6,  lapTime: '35.200', diff: '-0.600', status: 'Gültig' },
                        { lap: 5,  lapTime: '35.800', diff: '+0.300', status: 'Gültig' },
                        { lap: 4,  lapTime: '35.500', diff: '-1.200', status: 'Gültig' },
                        { lap: 3,  lapTime: '36.700', diff: '-0.800', status: 'Gültig' },
                        { lap: 2,  lapTime: '37.500', diff: '-2.500', status: 'Gültig' },
                        { lap: 1,  lapTime: '40.000', diff: '-', status: 'Start' }
                    ]
                }
            ]
        }
    };

    class KartingService {
        constructor() {
            this.activeTrackId = 'kartlandsinn';
            this.activeSessionId = REAL_SINN_SESSIONS[0].id; // Standard: Neueste & schnellste Session
        }

        getActiveTrackId() {
            return this.activeTrackId;
        }

        setActiveTrack(trackId) {
            if (TRACKS[trackId]) {
                this.activeTrackId = trackId;
                const track = TRACKS[trackId];
                if (track.sessions && track.sessions.length > 0) {
                    this.activeSessionId = track.sessions[0].id;
                }
                return true;
            }
            return false;
        }

        getActiveSession() {
            const track = TRACKS[this.activeTrackId] || TRACKS.kartlandsinn;
            return track.sessions.find(s => s.id === this.activeSessionId) || track.sessions[0];
        }

        setActiveSession(sessionId) {
            const track = TRACKS[this.activeTrackId] || TRACKS.kartlandsinn;
            const found = track.sessions.find(s => s.id === sessionId);
            if (found) {
                this.activeSessionId = sessionId;
                return true;
            }
            return false;
        }

        getAllSessions(trackId = this.activeTrackId) {
            const track = TRACKS[trackId] || TRACKS.kartlandsinn;
            return track.sessions;
        }

        async getTrackInfo(trackId = this.activeTrackId) {
            const track = TRACKS[trackId] || TRACKS.kartlandsinn;
            return {
                id: track.id,
                name: track.name,
                city: track.city,
                layout: track.layout,
                lengthMeters: track.lengthMeters,
                turns: track.turns,
                trackRecord: track.trackRecord,
                trackRecordHolder: track.trackRecordHolder,
                currentWeather: track.currentWeather,
                kartClass: track.kartClass
            };
        }

        async getDriverProfile(trackId = this.activeTrackId) {
            const track = TRACKS[trackId] || TRACKS.kartlandsinn;
            return {
                id: track.driver.id,
                licenseCode: track.driver.licenseCode,
                name: track.driver.nickname,
                nickname: track.driver.nickname,
                racingClass: track.kartClass,
                totalRaces: track.driver.totalRaces,
                podiums: track.driver.podiums,
                personalBest: track.driver.personalBest,
                bestAvgLap: track.driver.bestAvgLap,
                rankingPosition: track.driver.rankingPosition
            };
        }

        async fetchLiveSession(trackId = this.activeTrackId) {
            const track = await this.getTrackInfo(trackId);
            const driver = await this.getDriverProfile(trackId);
            const session = this.getActiveSession();
            return {
                track,
                driver,
                session,
                sessions: this.getAllSessions(trackId),
                activeTrackId: track.id
            };
        }

        async getLiveTiming(trackId = this.activeTrackId) {
            const track = TRACKS[trackId] || TRACKS.kartlandsinn;
            const session = this.getActiveSession();
            const best = session.bestLap;
            const laps = session.laps;
            const last = laps[0] || { lapTime: best, diff: '-0.452' };

            return {
                status: 'FINISHED',
                sessionName: session.name,
                currentPosition: session.position,
                kartNumber: 14,
                currentLap: laps.length,
                totalLaps: session.totalLaps,
                bestLapTime: best,
                avgLapTime: session.avgLap,
                lastLapTime: last.lapTime,
                deltaToRecord: '+' + (parseFloat(best) - parseFloat(track.trackRecord)).toFixed(3) + 's',
                laps: laps.map(l => ({
                    lap: l.lap,
                    time: l.lapTime,
                    gap: l.diff,
                    isBest: l.status === 'BEST'
                }))
            };
        }
    }

    return new KartingService();
}));
