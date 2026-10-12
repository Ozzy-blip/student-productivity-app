import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  static const Color primary = Color(0xFF3EB7FF);
  static const Color primaryDark = Color(0xFF2EA0E6);
  static const Color primarySoft = Color(0xFFEAF8FF);
  static const Color background = Color(0xFFF6F9FC);
  static const Color surface = Color(0xFFFFFFFF);
  static const Color success = Color(0xFF3BD48A);
  static const Color successSoft = Color(0xFFE8FFF5);
  static const Color warning = Color(0xFFFFB547);
  static const Color warningSoft = Color(0xFFFFF2DF);
  static const Color danger = Color(0xFFFF6B6B);
  static const Color dangerSoft = Color(0xFFFFEFEF);
  static const Color purple = Color(0xFF8B5CF6);
  static const Color gold = Color(0xFFFFD166);
  static const Color text = Color(0xFF0F1724);
  static const Color muted = Color(0xFF75839A);
  static const Color border = Color(0xFFE8EEF5);

  static ThemeData light() {
    final poppinsTextTheme = GoogleFonts.poppinsTextTheme();
    final interTextTheme = GoogleFonts.interTextTheme();

    return ThemeData(
      scaffoldBackgroundColor: background,
      colorScheme: ColorScheme.fromSeed(
        seedColor: primary,
        brightness: Brightness.light,
      ),
      useMaterial3: true,
      textTheme: poppinsTextTheme.copyWith(
        headlineLarge: poppinsTextTheme.headlineLarge?.copyWith(
          color: text,
          fontWeight: FontWeight.w700,
        ),
        headlineMedium: poppinsTextTheme.headlineMedium?.copyWith(
          color: text,
          fontWeight: FontWeight.w700,
        ),
        titleLarge: poppinsTextTheme.titleLarge?.copyWith(
          color: text,
          fontWeight: FontWeight.w700,
        ),
        bodyLarge: interTextTheme.bodyLarge?.copyWith(
          color: text,
          fontWeight: FontWeight.w500,
        ),
        bodyMedium: interTextTheme.bodyMedium?.copyWith(
          color: text,
          fontWeight: FontWeight.w500,
        ),
        labelLarge: interTextTheme.labelLarge?.copyWith(
          color: text,
          fontWeight: FontWeight.w600,
        ),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: background,
        foregroundColor: text,
        elevation: 0,
      ),
      cardTheme: CardTheme(
        color: surface,
        elevation: 0,
        margin: EdgeInsets.zero,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
          side: const BorderSide(color: border, width: 1.5),
        ),
      ),
      chipTheme: ChipThemeData(
        backgroundColor: primarySoft,
        side: BorderSide.none,
        labelStyle: const TextStyle(
          color: primaryDark,
          fontWeight: FontWeight.w700,
        ),
      ),
      dividerTheme: const DividerThemeData(
        color: border,
        thickness: 1,
      ),
    );
  }
}
