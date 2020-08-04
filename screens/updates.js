import * as React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { YaKlass } from "../yaklass";
import * as cheerio from "react-native-cheerio";
import { Table, TableWrapper, Row, Rows, Col } from "react-native-table-component";

class Update {
    Date = "";
    Label = "";
    Programm = "";
}

export class UpdatesScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            
        };

        this.updates = [];
    }

    async fetchUpdates() {
        var ya = new YaKlass();

        var resp = await ya.Get("p-updates", {});

        var $ = cheerio.load(resp.data);
        var data = "";

        this.updates = [];
        var that = this;

        $("tr[itemprop=itemListElement]").each((_, element) => {
            var upd = new Update();

            $(element).find("td").each((i, el) => {
                var e = $(el).text().trim().split("\n");
                var header = e[0].trim();
                var content = e[1].trim();

                if(header.includes("Обучающая программа")) {
                    upd.Programm = content;
                } else if(header.includes("Дата")) {
                    upd.Date = content;
                } else if(header.includes("Тема")) {
                    upd.Label = content;
                }
            });

            that.updates.push(upd);
        });

        this.setState({ data });
    }

    componentDidMount() {
        this.fetchUpdates().done();
    }

    render() {
        const styles = StyleSheet.create({
            container: { flex: 1, paddingTop: 30, backgroundColor: "#fff" },
            header: { height: 50, backgroundColor: "#537791" },
            text: { textAlign: "center", fontWeight: "100" },
            dataWrapper: { marginTop: -1 },
            row: { height: 40, backgroundColor: "#E7E6E1" }
        });

        var items = [];

        this.updates.forEach((el) => {
            items.push(
                [el.Date, el.Programm, el.Label]
            )
        });

        var width = [100, 300, 400]

        return (
            <View style={styles.container}>
                <ScrollView horizontal={ true }>
                    <ScrollView style={ styles.dataWrapper }>
                        <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
                            { items.map((rowData, index) => (
                                <Row
                                    key={ index }
                                    data={ rowData }
                                    widthArr={ width }
                                    style={ [ styles.row, index % 2 && { backgroundColor: "#F7F6E7" } ] }
                                    textStyle={ styles.text }
                                />
                            )) }
                        </Table>
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}