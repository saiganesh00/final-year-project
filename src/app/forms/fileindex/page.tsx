'use client'
import { useState } from 'react';
import { Image, PDFViewer, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import Header from '@/components/normal/header';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
   
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  tableHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleDate: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    marginRight: '5',
    fontSize: '15',
    padding: '5'
  },
});

const page = () => {
  
    const [date, setDate] = useState('0-0-0')

  
  return (
    <div className='h-screen w-screen flex'>
      <div className="left h-full w-1/3 border-r border-black">
  <h1 className="text-center py-4"><b>Add Fields</b></h1>
  {/* Input fields */}
  <div className="p-4">
    <label className="block mb-2">Date:</label>
    <input type="date" className="border border-gray-400 rounded-md p-2 w-full mb-4" />
    <label className="block mb-2">Session 1:</label>
    <input type="text" className="border border-gray-400 rounded-md p-2 w-full mb-4" />
    <label className="block mb-2">Tea Break:</label>
    <input type="text" className="border border-gray-400 rounded-md p-2 w-full mb-4" />
    <label className="block mb-2">Session 2:</label>
    <input type="text" className="border border-gray-400 rounded-md p-2 w-full mb-4" />
    <label className="block mb-2">Lunch Break:</label>
    <input type="text" className="border border-gray-400 rounded-md p-2 w-full mb-4" />
    <label className="block mb-2">Session 3:</label>
    <input type="text" className="border border-gray-400 rounded-md p-2 w-full mb-4" />
  </div>
</div>

      <div className="right flex-1">
      <h1 className='text-center py-4'><b>Timetable Preview</b></h1>

        <PDFViewer style={{ width: '100%', height: '100vh' }}>
          <Document>
            <Page size="A4" style={styles.page}>
                <Header />
            <View>
            <View style={styles.styleDate}>
                <Text >Date: {date}</Text>
            </View>

                    <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.tableHeader]}>Date</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Session 1</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Tea Break</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Session 2</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Lunch Break</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Session 3</Text>
            </View>
            {/* Table Rows */}
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Date 1</Text>
                <Text style={styles.tableCell}>Session 1, Cell 1</Text>
                <Text style={styles.tableCell}>Tea Break, Cell 1</Text>
                <Text style={styles.tableCell}>Session 2, Cell 1</Text>
                <Text style={styles.tableCell}>Lunch Break, Cell 1</Text>
                <Text style={styles.tableCell}>Session 3, Cell 1</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Date 2</Text>
                <Text style={styles.tableCell}>Session 1, Cell 2</Text>
                <Text style={styles.tableCell}>Tea Break, Cell 2</Text>
                <Text style={styles.tableCell}>Session 2, Cell 2</Text>
                <Text style={styles.tableCell}>Lunch Break, Cell 2</Text>
                <Text style={styles.tableCell}>Session 3, Cell 2</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Date 3</Text>
                <Text style={styles.tableCell}>Session 1, Cell 2</Text>
                <Text style={styles.tableCell}>Tea Break, Cell 2</Text>
                <Text style={styles.tableCell}>Session 2, Cell 2</Text>
                <Text style={styles.tableCell}>Lunch Break, Cell 2</Text>
                <Text style={styles.tableCell}>Session 3, Cell 2</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Date 4</Text>
                <Text style={styles.tableCell}>Session 1, Cell 2</Text>
                <Text style={styles.tableCell}>Tea Break, Cell 2</Text>
                <Text style={styles.tableCell}>Session 2, Cell 2</Text>
                <Text style={styles.tableCell}>Lunch Break, Cell 2</Text>
                <Text style={styles.tableCell}>Session 3, Cell 2</Text>
            </View>
            <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Date 5</Text>
                <Text style={styles.tableCell}>Session 1, Cell 2</Text>
                <Text style={styles.tableCell}>Tea Break, Cell 2</Text>
                <Text style={styles.tableCell}>Session 2, Cell 2</Text>
                <Text style={styles.tableCell}>Lunch Break, Cell 2</Text>
                <Text style={styles.tableCell}>Session 3, Cell 2</Text>
            </View>
            </View>
        </View>

            </Page>
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
};

export default page;
