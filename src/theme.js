const colors = {
    mainDark: '#09253d',
    secondDark: '#3f576d',
    light: '#f2f3f5',
    gray: '#e3e4e6',
    deepGray: '#dee3e7',
    contrastText: '#f5f5f5',
    grayText: '#a9a9a9',
    black: '#3c3b3d',
    primaryMain: '#e12571',
    primaryDark: '#bf265f',
    secondaryMain: '#39d452',
    secondaryDark: '#39ae52',
    red: '#de3124',
    white: '#ffffff',
    orange: '#f4a824',
};
const theme = {
    borderRadius: 3,
    spacingUnit: 8,
};
const labelStyle = {
    fontWeight: 600,
    color: '#000',
    // fontSize: '1.1rem',
    // lineHeight: 0,
};

export default {
    palette: {
        // type: 'dark',
        /*background: {
            default: '#fdfdfe',
            paper: '#ffffff',
        },*/
        primary: {
            light: colors.light,
            main: colors.primaryMain,
            dark: colors.primaryDark,
            contrastText: colors.contrastText,
        },
        secondary: {
            light: colors.light,
            main: colors.secondaryMain,
            dark: colors.secondaryDark,
            contrastText: colors.contrastText,
        },
        red: colors.red,
    },
    shape: {
        borderRadius: theme.borderRadius,
    },
    common: {
        colors,
        styles: {
            labelStyle,
        },
    },
    props: {
        MuiInput: {
            // disableUnderline: true,
            // fullWidth: true,
        },
        MuiInputLabel: {
            // shrink: true,
            // focused: false,
        },
        MuiSelect: {
            // IconComponent: KeyboardArrowDown,
            // focused: false,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'inherit',
                minWidth: theme.spacingUnit * 11,

                '&.right-margin': {
                    marginRight: theme.spacingUnit * 2,
                },
                '&.dark': {
                    backgroundColor: colors.mainDark,
                    color: colors.white,
                    '&:hover': {
                        backgroundColor: colors.secondDark,
                        color: colors.gray,
                    },
                },
                '&.green': {
                    backgroundColor: colors.mainDark,
                    '&:hover': {
                        backgroundColor: colors.secondDark,
                    },
                },
            },
            contained: {
                backgroundColor: colors.light,
            },
        },
        MuiTextField: {
            root: {
                '&.large-margin': {
                    marginTop: theme.spacingUnit*5,
                    marginBottom: theme.spacingUnit*5,
                },
            },
        },
        /*MuiInput: {
            root: {
                border: '2px ${colors.gray} solid',
                borderRadius: theme.borderRadius,
                '& input': {
                    paddingLeft: theme.spacingUnit,
                },
            },
            multiline: {
                paddingLeft: theme.spacingUnit,
                paddingTop: theme.spacingUnit,
            },
        },
        MuiSelect: {
            select: {
                paddingLeft: theme.spacingUnit,
                '&:before': {
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    content: '""',
                    width: theme.spacingUnit * 4,
                    height: '100%',
                    backgroundColor: colors.deepGray,
                },
            },
            icon: {
                right: theme.spacingUnit / 2,
                fill: colors.black,
            },
        },
        MuiFormLabel: {
            root: {
                '&.custom': labelStyle,
            },
        },
        MuiInputLabel: {
            root: {
                display: 'block',
            },
        },
        MuiDivider: {
            root: {
                marginBottom: theme.spacingUnit * 2,
                '&.top-page-divider': {
                    marginBottom: theme.spacingUnit * 6,
                },
                '&.top-margin': {
                    marginTop: theme.spacingUnit * 2,
                    marginBottom: 0,
                },
                '&.empty': {
                    height: 0,
                },
                '&.no-margin': {
                    marginBottom: 0,
                },
                '&.mini': {
                    marginBottom: theme.spacingUnit,
                },
                '&.list': {
                    marginTop: theme.spacingUnit,
                    marginBottom: theme.spacingUnit,
                },
                '&.mirror': {
                    marginTop: theme.spacingUnit * 2,
                    marginBottom: theme.spacingUnit * 2,
                },
            },
        },
        MuiListItem: {
            root: {
                '&.text-color-red': {
                    color: colors.red,
                },
            },
        },
        MuiChip: {
            root: {
                '&.list-chip': {
                    height: '18px',
                    fontWeight: 'bold',
                    fontSize: '.6rem',
                    color: '#FFF',
                    textTransform: 'uppercase'
                },
                '&.active': {
                    backgroundColor: colors.secondaryMain
                },
                '&.pending': {
                    backgroundColor: colors.orange
                },
            },
        },
        MuiTableCell: {
            head: {
                paddingLeft: 0,
                paddingRight: 0,
            },
            root: {
                paddingLeft: 0,
                paddingRight: 0,
                '&:last-child': {
                    paddingRight: 0,
                },
            },
        },
        MuiTab: {
            root: {
                fontWeight: 'bold',
            },
            selected: {
                color: colors.primaryMain,
            },
            labelContainer: {
                padding: '6px ${theme.spacingUnit}px !important',
            },
        },
        MuiPaper: {
            root: {
                '&.page-paper': {
                    padding: theme.spacingUnit * 4,
                    backgroundColor: colors.white,
                }
                ,
                '&.section': {
                    '&:before': {
                        display: 'none',
                    }
                    ,
                }
                ,
                '&.back-btn-templates': {
                    paddingLeft: theme.spacingUnit,
                    paddingRight: theme.spacingUnit * 2,
                    paddingTop: theme.spacingUnit,
                    paddingBottom: theme.spacingUnit,
                    backgroundColor: colors.white,
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '14px',
                    fontWeight: 700,
                    marginBottom: theme.spacingUnit * 2,
                    cursor: 'pointer',
                }
                ,
            }
            ,
            elevation1: {
                '&.section': {
                    boxShadow: 'none',
                }
                ,
            }
            ,
        },
        MuiExpansionPanel: {
            expanded: {
                '&.section': {
                    margin: 0,
                }
                ,
            }
            ,
        },
        MuiExpansionPanelSummary: {
            root: {
                '&.section': {
                    padding: 0,
                }
                ,
            }
            ,
            expanded: {
                margin: 0,
                '&.section': {
                    minHeight: theme.spacingUnit * 6,
                }
                ,
            }
            ,
            content: {
                '&$expanded': {
                    margin: 0,
                }
                ,
            }
            ,
            // MuiButtonBase-root-61 MuiIconButton-root-252 MuiExpansionPanelSummary-expandIcon-251 MuiExpansionPanelSummary-expanded-247
            expandIcon: {
                padding: 0,
                marginRight: `-${theme.spacingUnit/2}px`,
                color: colors.primaryMain,
            }
            ,
        }
        ,
        MuiExpansionPanelDetails: {
            root: {
                '&.section': {
                    padding: 0,
                    flexDirection: 'column',
                }
                ,
            }
            ,
        }
        ,
        MuiTypography: {
            root: {
                fontFamily: '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif !important',
                '&.bold': {
                    fontWeight: 'bold',
                }
                ,
            }
            ,
        }
        ,
        MuiDialog: {
            paper: {
                '&.fixed-height': {
                    height: 'calc(100% - 96px)',
                }                ,
            }
            ,
        }
        ,
        MuiDialogActions: {
            root: {
                justifyContent: 'flex-start',
                margin: 0,
                padding: theme.spacingUnit * 3,
                paddingTop: 0,
            }
            ,
        }
        ,*/
    },
}
;
