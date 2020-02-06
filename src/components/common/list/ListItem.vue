<template>
    <div class="list-item">
        <div class="image" :style="`background-image: url('${image}')`"></div>
        <div class="date">
            <div class="month">{{ dateObject[0].month }}</div>
            <div class="day">{{ dateObject[0].day }}</div>
            <div class="year">{{ dateObject[0].year }}</div>
        </div>
        <div class="body">
            <div class="until">
                <span class="mobile-date">
                    {{ `${dateObject[0].day} ${dateObject[0].month} ${dateObject[0].year} | ` }}
                </span>
                {{ dateObject[1] ? `Until ${dateObject[1].month} ${dateObject[1].day}` : `${dateObject[0].weekday} - ${dateObject[0].time}` }}
            </div>
            <div class="author">
                {{ author }}
            </div>
            <div class="description">
                Width: {{ width }}, Height: {{ height }}
            </div>
        </div>
        <div class="button-wrapper">
            <a target="_blank" :href="url" class="button">Find pics</a>
        </div>
    </div>
</template>

<script>
    import * as moment from 'moment';

    export default {
        name: 'ListItem',
        props: [
            'image', 'dates', 'author', 'width', 'height', 'url'
        ],
        computed: {
            dateObject() {
                if (Array.isArray(this.dates)) {
                    return this.dates.map((x) => x = this.parseDate(x));
                } else {
                    return [ 
                        this.parseDate(this.dates)
                    ];
                }
            }
        },
        methods: {
            parseDate(date) {
                let parsedDate = moment(date);

                return {
                    day: parsedDate.format('DD'),
                    month: parsedDate.format('MMM'),
                    year: parsedDate.format('YYYY'),
                    time: parsedDate.format('HH:mm'),
                    weekday: parsedDate.format('ddd')
                };
            }
        }
    }
</script>

<style scoped lang="scss">
    .list-item {
        padding: 15px 0;
        border-bottom: 1px solid #e9e9e9;
        height: 111px;
        position: relative;
        overflow: hidden;

        @media screen and (min-width: 768px) { 
            height: 101px;
        }

        &:last-of-type {
            border-bottom: unset;
        }

        .image {
            position: relative;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            transition: all .5s;
            width: 130px;
            height: 100%;
            float: left;
            margin-right: 10px;

            
            @media screen and (min-width: 768px) { 
                margin-right: 0;
            }
        }

        .date {
            display: none;

            @media screen and (min-width: 768px) { 
                display: block;
                position: relative;
                height: 100%;
                width: 60px;
                float: left;
                text-transform: uppercase;
                text-align: center;
                opacity: .7;
                font-size: 0;

                .month,
                .year {
                    height: 15px;
                    line-height: 15px;
                    width: 100%;
                    font-size: 13px;
                    font-weight: 700;
                }

                .day {
                    height: 30px;
                    line-height: 30px;
                    font-size: 24px;
                    font-weight: 400;
                }
            }
        }

        .body {
            float: left;
            width: calc(100% - (130px + 60px + 110px));

            .until {
                width: 200%;
                line-height: 15px;
                font-size: 13px;
                font-weight: 700;
                color: #ca0088;

                @media screen and (min-width: 768px) { 
                    width: 100%;
                    
                    .mobile-date {
                        display: none;
                    }
                }
            }

            .author {
                width: 200%;
                line-height: 25px;
                font-size: 13px;
                font-weight: 700;
                opacity: .85;

                @media screen and (min-width: 768px) { 
                    width: 100%;
                }
            }

            .description {
                width: 100%;
                line-height: 20px;
                font-size: 15px;
            }
        }

        .button-wrapper {
            position: absolute;
            right: 0;
            height: calc(100% - 30px);
            width: 110px;
            display: flex;
            align-items: flex-end;

            @media screen and (min-width: 768px) { 
                align-items: center;
            }

            .button {
                display: block;
                width: 100%;
                background-color: #ca0088;
                color: white;
                height: 30px;
                line-height: 30px;
                padding-left: 15px;
                font-size: 14px;
                text-decoration: none;
                font-weight: 700;
                transition: .1s ease-in-out all;

                &::after {
                    content: '›';
                    position: absolute;
                    right: 10px;
                    line-height: 30px;
                }

                &:active {
                    background-color: #990066;
                }
            }
        }
    }
</style>