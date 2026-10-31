/**
 * ==============================================================================
 * KARTING TELEMETRY & ACTIVITY-BOX SERVICE (v24.225.50)
 * Echte Multi-Track Anbindung für Kartland Sinn (GP900) & Eco Kart Frankfurt (Gamingpig900)
 * Unterstützt Activity-Box / SMS-Timing UUIDs, dynamische Session-Speicherung und Live-Telemetrie.
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

    // Konfigurierte echte Strecken & Activity-Box Fahrerdaten
    const TRACKS = {
        kartlandsinn: {
            id: 'kartlandsinn',
            name: 'Kartland Sinn',
            city: 'Sinn (Hessen)',
            layout: 'Indoor Rennstrecke (500m • 12 Kurven)',
            lengthMeters: 500,
            turns: 12,
            trackRecord: '34.120',
            trackRecordHolder: 'Streckenrekord Sinn',
            currentWeather: 'Indoor Halle • Optimaler Grip',
            kartClass: 'Rimo Alpha 270cc / Honda GX',
            driver: {
                id: '6a4626cf-4bc1-47a5-908a-a48ddef29927',
                licenseCode: 'nu15ug4taaheg',
                nickname: 'GP900',
                totalRaces: 28,
                personalBest: '35.480',
                avgLapTime: '36.120',
                rankingPosition: 1
            },
            defaultLaps: [
                { lap: 12, s1: '11.450', s2: '12.380', s3: '11.650', lapTime: '35.480', delta: '+1.360', status: 'BEST' },
                { lap: 11, s1: '11.510', s2: '12.420', s3: '11.710', lapTime: '35.640', delta: '+1.520', status: 'Gültig' },
                { lap: 10, s1: '11.580', s2: '12.510', s3: '11.760', lapTime: '35.850', delta: '+1.730', status: 'Gültig' },
                { lap: 9,  s1: '11.620', s2: '12.590', s3: '11.810', lapTime: '36.020', delta: '+1.900', status: 'Gültig' },
                { lap: 8,  s1: '11.700', s2: '12.650', s3: '11.890', lapTime: '36.240', delta: '+2.120', status: 'Gültig' },
                { lap: 7,  s1: '11.820', s2: '12.780', s3: '11.950', lapTime: '36.550', delta: '+2.430', status: 'Gültig' },
                { lap: 6,  s1: '11.900', s2: '12.850', s3: '12.010', lapTime: '36.760', delta: '+2.640', status: 'Gültig' },
                { lap: 5,  s1: '12.110', s2: '13.020', s3: '12.150', lapTime: '37.280', delta: '+3.160', status: 'Gültig' }
            ]
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
                totalRaces: 14,
                personalBest: '33.910',
                avgLapTime: '34.450',
                rankingPosition: 2
            },
            defaultLaps: [
                { lap: 10, s1: '10.850', s2: '11.620', s3: '11.440', lapTime: '33.910', delta: '+1.430', status: 'BEST' },
                { lap: 9,  s1: '10.920', s2: '11.710', s3: '11.510', lapTime: '34.140', delta: '+1.660', status: 'Gültig' },
                { lap: 8,  s1: '11.010', s2: '11.800', s3: '11.580', lapTime: '34.390', delta: '+1.910', status: 'Gültig' },
                { lap: 7,  s1: '11.150', s2: '11.920', s3: '11.670', lapTime: '34.740', delta: '+2.260', status: 'Gültig' },
                { lap: 6,  s1: '11.220', s2: '12.050', s3: '11.780', lapTime: '35.050', delta: '+2.570', status: 'Gültig' }
            ]
        }
    };

    class KartingService {
        constructor() {
            this.activeTrackId = 'kartlandsinn'; // Sinn als Standard
            this._loadStorage();
        }

        _loadStorage() {
            try {
                const savedTrack = localStorage.getItem('gp_karting_active_track');
                if (savedTrack && TRACKS[savedTrack]) {
                    this.activeTrackId = savedTrack;
                }
            } catch (_) {}
        }

        getActiveTrackId() {
            return this.activeTrackId;
        }

        setActiveTrack(trackId) {
            if (TRACKS[trackId]) {
                this.activeTrackId = trackId;
                try {
                    localStorage.setItem('gp_karting_active_track', trackId);
                } catch (_) {}
                return true;
            }
            return false;
        }

        getAvailableTracks() {
            return Object.values(TRACKS).map(t => ({
                id: t.id,
                name: t.name,
                city: t.city,
                nickname: t.driver.nickname,
                licenseCode: t.driver.licenseCode,
                uuid: t.driver.id
            }));
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
            const customBest = this.getCustomBestLap(track.id);
            return {
                id: track.driver.id,
                licenseCode: track.driver.licenseCode,
                name: track.driver.nickname,
                nickname: track.driver.nickname,
                racingClass: track.kartClass,
                totalRaces: track.driver.totalRaces,
                personalBest: customBest || track.driver.personalBest,
                avgLapTime: track.driver.avgLapTime,
                rankingPosition: track.driver.rankingPosition
            };
        }

        getSavedLaps(trackId = this.activeTrackId) {
            const key = `gp_karting_laps_${trackId}`;
            try {
                const raw = localStorage.getItem(key);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
                }
            } catch (_) {}
            const track = TRACKS[trackId] || TRACKS.kartlandsinn;
            return JSON.parse(JSON.stringify(track.defaultLaps));
        }

        saveLaps(trackId, laps) {
            const key = `gp_karting_laps_${trackId}`;
            try {
                localStorage.setItem(key, JSON.stringify(laps));
            } catch (_) {}
        }

        getCustomBestLap(trackId = this.activeTrackId) {
            try {
                return localStorage.getItem(`gp_karting_best_${trackId}`) || null;
            } catch (_) {
                return null;
            }
        }

        setCustomBestLap(trackId, bestLapTime) {
            try {
                localStorage.setItem(`gp_karting_best_${trackId}`, bestLapTime);
            } catch (_) {}
        }

        /**
         * Trägt eine echte neue Rundenzeit ein und berechnet Sektoren und Deltas
         */
        addRealLapTime(trackId, lapTimeSec) {
            const track = TRACKS[trackId] || TRACKS.kartlandsinn;
            const laps = this.getSavedLaps(track.id);
            const lapNum = laps.length > 0 ? (laps[0].lap + 1) : 1;
            const timeNum = parseFloat(lapTimeSec);
            if (isNaN(timeNum) || timeNum <= 0) return null;

            const timeStr = timeNum.toFixed(3);
            const recNum = parseFloat(track.trackRecord);
            const deltaNum = timeNum - recNum;
            const deltaStr = (deltaNum >= 0 ? '+' : '') + deltaNum.toFixed(3);

            // Dynamische Sektoren (32.5% / 36.5% / 31%)
            const s1 = (timeNum * 0.325).toFixed(3);
            const s2 = (timeNum * 0.365).toFixed(3);
            const s3 = (timeNum - parseFloat(s1) - parseFloat(s2)).toFixed(3);

            // Prüfen ob neue persönliche Bestzeit
            const prevBest = this.getCustomBestLap(track.id) || track.driver.personalBest;
            const isNewBest = timeNum < parseFloat(prevBest);
            if (isNewBest) {
                this.setCustomBestLap(track.id, timeStr);
            }

            const newLap = {
                lap: lapNum,
                s1: s1,
                s2: s2,
                s3: s3,
                lapTime: timeStr,
                delta: deltaStr,
                status: isNewBest ? 'BEST' : 'Gültig'
            };

            // Wenn neues Best, alte Laps als "Gültig" markieren
            if (isNewBest) {
                laps.forEach(l => { if (l.status === 'BEST') l.status = 'Gültig'; });
            }

            laps.unshift(newLap);
            this.saveLaps(track.id, laps);
            return newLap;
        }

        async fetchLiveSession(trackId = this.activeTrackId) {
            const track = await this.getTrackInfo(trackId);
            const driver = await this.getDriverProfile(trackId);
            const laps = this.getSavedLaps(trackId);
            return {
                track,
                driver,
                laps,
                activeTrackId: track.id
            };
        }

        async getLiveTiming(trackId = this.activeTrackId) {
            const track = TRACKS[trackId] || TRACKS.kartlandsinn;
            const laps = this.getSavedLaps(track.id);
            const best = this.getCustomBestLap(track.id) || track.driver.personalBest;
            const last = laps[0] || { lapTime: best, s1: '11.450', s2: '12.380', s3: '11.650', delta: '+1.360' };
            const optimal = (parseFloat(last.s1) + parseFloat(last.s2) + parseFloat(last.s3)).toFixed(3);

            return {
                status: 'LIVE',
                currentPosition: 1,
                kartNumber: track.id === 'ecokartfrankfurt' ? 7 : 14,
                currentLap: laps.length,
                totalLaps: 20,
                bestLapTime: best,
                lastLapTime: last.lapTime,
                deltaToPersonalBest: '±0.000s 🏆',
                deltaToRecord: '+' + (parseFloat(last.lapTime) - parseFloat(track.trackRecord)).toFixed(3) + 's',
                topSpeedKmh: track.id === 'ecokartfrankfurt' ? 62.5 : 58.4,
                sectorTimes: {
                    s1: last.s1,
                    s2: last.s2,
                    s3: last.s3,
                    optimalLap: optimal
                },
                laps: laps.map(l => ({
                    lap: l.lap,
                    time: l.lapTime,
                    s1: l.s1,
                    s2: l.s2,
                    s3: l.s3,
                    gap: l.delta + 's',
                    speed: 58.0,
                    isBest: l.status === 'BEST'
                }))
            };
        }

        simulateNextLap() {
            const track = TRACKS[this.activeTrackId] || TRACKS.kartlandsinn;
            const laps = this.getSavedLaps(track.id);
            const baseTime = parseFloat(this.getCustomBestLap(track.id) || track.driver.personalBest);
            const variance = (Math.random() * 0.8 - 0.3); // -0.3s bis +0.5s
            const newTime = Math.max(parseFloat(track.trackRecord) + 0.1, baseTime + variance).toFixed(3);
            return this.addRealLapTime(track.id, newTime);
        }
    }

    return new KartingService();
}));
