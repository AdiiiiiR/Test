import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const WIDGET_COLORS = {
  myCourses: '#6A1B9A',
  upcomingDeadlines: '#D32F2F',
  progressOverview: '#00796B',
  leaderboard: '#FBC02D',
};

const Widget = ({ title, color }) => (
  <View style={[styles.widget, { backgroundColor: color }]}>
    <Text style={styles.widgetTitle}>{title}</Text>
  </View>
);

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>LMS Dashboard</Text>
      <Widget title="My Courses" color={WIDGET_COLORS.myCourses} />
      <Widget title="Upcoming Deadlines" color={WIDGET_COLORS.upcomingDeadlines} />
      <Widget title="Progress Overview" color={WIDGET_COLORS.progressOverview} />
      <Widget title="Leaderboard" color={WIDGET_COLORS.leaderboard} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  widget: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  widgetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
