import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabBar = ({ setType, type }) => (
    <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setType('All')}>
            <Text style={[styles.tabText, type === 'All' && styles.selected]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setType('Active')}>
            <Text style={[styles.tabText, type === 'Active' && styles.selected]}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setType('Complete')}>
            <Text style={[styles.tabText, type === 'Complete' && styles.selected]}>Complete</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        borderTopWidth: 1,
        borderTopColor: '#B0B0B0',
        paddingTop: 10,
        paddingBottom: 10,
        height:70, 
    },
    tabButton: { 
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
    },
    selected: {
        color: '#000',
        fontWeight: 'bold',
    },
});


export default TabBar;
